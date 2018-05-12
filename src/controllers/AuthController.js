let {login} = require('../services/users/AuthenticationService');

/**
 * Login
 */
exports.login = async (req, res) => {

    let {email, password} = req.body;

    let status = await login(email, password);

    res.send({status});

};

