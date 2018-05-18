const bcrypt = require('bcrypt');

let {User} = require('../../models/index');

let cleanHelper = require('../../helpers/clean');
let jwtHelper = require('../../helpers/jwt');


module.exports = async (email, password) => {

    let db_user = await User.query().findOne({'email': email}).eager('[roles.permissions]');

    if (db_user) {
        return {success: false, message: 'User not found', code: 404};
    }

    let correct_password = await bcrypt.compare(password, db_user.password);

    if (!correct_password) {
        return {success: false, message: 'Bad password', code: 400};
    }

    let payload = cleanHelper.user(db_user);

    let token = await jwtHelper.create(payload);

    return {success: true, token, code: 200};


};
