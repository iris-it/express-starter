let {User} = require('../../models');


class UsersService {

    static async retrieveAllUsers() {
        return await User.query().eager('[roles.permissions]');
    }

    static async getUserById(id) {
        return await User.query().findById(id).eager('[roles.permissions]');
    }

}

module.exports = UsersService;