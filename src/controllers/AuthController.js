const login = require('../services/auth/login');
const refresh = require('../services/auth/refresh');
const logout = require('../services/auth/logout');

const requestHelper = require('../helpers/request');

/**
 * Login
 */
exports.login = async (req, res, next) => {

    let {email, password} = req.body;

    let result = await login(email, password);

    if (result instanceof Error) {
        next(result);
    }

    res.ok(result);

};


/**
 * Refresh Token
 */
exports.refresh = async (req, res, next) => {

    let request_token = requestHelper.extract_token(req);

    let result = await refresh(request_token);

    if (result instanceof Error) {
        next(result);
    }

    res.send({token: result});

};

exports.logout = async (req, res, next) => {

    let request_token = requestHelper.extract_token(req);

    let result = await logout(request_token);

    if (result instanceof Error) {
        next(result);
    }

    res.send({token: result});
};