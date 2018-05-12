let bcrypt = require('bcrypt');
let {User} = require('../../models');


exports.login = async (email, password) => {

    let user = await User.query().findOne({'email': email});

    if (!user) {
        throw new Error('User not found');
    }

    // issue JWT

    return await bcrypt.compare(password, user.password);

}
;
