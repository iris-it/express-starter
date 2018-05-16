let {User} = require('../models');

exports.retrieveAllUsers = async function () {
    return await User.query().eager('[roles.permissions]');
};

exports.getUserById = async function (id) {
    return await User.query().findById(id).eager('[roles.permissions]');
};

exports.getUserByEmail = async function (email) {
    return await User.query().findOne({'email': email}).eager('[roles.permissions]');
};


