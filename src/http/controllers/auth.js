const login = require('../../services/auth/login');
const refresh = require('../../services/auth/refresh');
const logout = require('../../services/auth/logout');

const requestHelper = require('../../helpers/request');

/**
 * Login
 */
exports.login = async (req, res) => {

    let {email, password} = req.body;

    let result = await login(email, password);

    return res.send(result);
};


/**
 * Refresh Token
 */
exports.refresh = async (req, res) => {

    let request_token = requestHelper.extract_token(req);

    let result = await refresh(request_token);

    res.send({token: result});

};

/**
 * Logout
 */
exports.logout = async (req, res) => {

    let request_token = requestHelper.extract_token(req);

    let result = await logout(request_token);

    res.send({token: result});
};