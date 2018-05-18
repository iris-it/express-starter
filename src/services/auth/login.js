const bcrypt = require('bcrypt');

let {User} = require('../../models/index');
let {NotFoundException, UnauthorizedException} = require('../../exceptions');

let cleanHelper = require('../../helpers/clean');
let jwtHelper = require('../../helpers/jwt');


module.exports = async (email, password) => {

    let db_user = await User.query()
        .select(['id', 'firstname', 'lastname', 'email', 'phone', 'password'])
        .findOne({'email': email})
        .eager('[roles.permissions]')
        .modifyEager('roles', query => query.select('name'))
        .modifyEager('roles.permissions', query => query.select('name'));

    if (!db_user) {
        throw new NotFoundException('User is not found');
    }

    let correct_password = await bcrypt.compare(password, db_user.password);

    if (!correct_password) {
        throw new UnauthorizedException('Bad credentials');
    }

    let payload = cleanHelper.user(db_user);

    return await jwtHelper.create(payload);

};

