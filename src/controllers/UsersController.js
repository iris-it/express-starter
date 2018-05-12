let UserService = require('../services/users/UsersService');

/**
 * Get all users
 */
exports.all = async (req, res) => {

    res.send(await UserService.retrieveAllUsers());

};

/**
 * Get one user
 */
exports.one = async (req, res) => {

    let id = req.params.id;

    res.send(await UserService.getUserById(id));

};
