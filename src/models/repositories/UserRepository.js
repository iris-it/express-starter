let {User} = require('../index');

exports.retrieveAllUsers = async function (formatter = null) {

    let users = await User.query().eager('[roles.permissions]');

    return (formatter) ? await formatter(users) : users;

};

exports.getUserById = async function (id, formatter = null) {

    let user = await User.query().findById(id).eager('[roles.permissions]');

    return (formatter) ? await formatter(user) : user;

};

exports.getUserByEmail = async function (email, formatter = null) {

    let user = await User.query().findOne({'email': email}).eager('[roles.permissions]');

    return (formatter) ? await formatter(user) : user;

};


