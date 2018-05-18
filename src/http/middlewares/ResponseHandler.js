/**
 * HTTP Status codes
 */
const statusCodes = {
    CONTINUE: 100,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIME_OUT: 504
};

module.exports = function (req, res, next) {

    res.success = function (data = null, message = null) {
        res.status = res.status < 400 ? res.status : statusCodes.OK;
        res.send({status: 'success', code: res.status, data, message});
    };

    res.fail = (code = null, message = null, data = null) => {
        res.status = res.status >= 400 && res.status < 500 ? res.status : statusCodes.BAD_REQUEST;
        res.send({status: 'fail', code: res.status, data, message});
    };

    res.error = (code = null, message = null, data = null) => {
        res.status = res.status < 500 ? statusCodes.INTERNAL_SERVER_ERROR : res.status;
        res.send({status: 'error', code: res.status, data, message});
    };

    res.ok = (data, message) => {
        res.status = statusCodes.OK;
        res.success(data, message);
    };

    res.created = (data, message) => {
        res.status = statusCodes.CREATED;
        res.success(data, message);
    };

    res.accepted = (data, message) => {
        res.status = statusCodes.ACCEPTED;
        res.success(data, message);
    };

    res.noContent = (data, message) => {
        res.status = statusCodes.NO_CONTENT;
        res.success(data, message);
    };

    res.badRequest = (code, message, data) => {
        res.status = statusCodes.BAD_REQUEST;
        res.fail(code, message, data);
    };

    res.forbidden = (code, message, data) => {
        res.status = statusCodes.FORBIDDEN;
        res.fail(code, message, data);
    };

    res.notFound = (code, message, data) => {
        res.status = statusCodes.NOT_FOUND;
        res.fail(code, message, data);
    };

    res.requestTimeout = (code, message, data) => {
        res.status = statusCodes.REQUEST_TIMEOUT;
        res.fail(code, message, data);
    };

    res.unprocessableEntity = (code, message, data) => {
        res.status = statusCodes.UNPROCESSABLE_ENTITY;
        res.fail(code, message, data);
    };

    res.internalServerError = (code, message, data) => {
        res.status = statusCodes.INTERNAL_SERVER_ERROR;
        res.error(code, message, data);
    };

    res.notImplemented = (code, message, data) => {
        res.status = statusCodes.NOT_IMPLEMENTED;
        res.error(code, message, data);
    };

    res.badGateway = (code, message, data) => {
        res.status = statusCodes.BAD_GATEWAY;
        res.error(code, message, data);
    };

    res.serviceUnavailable = (code, message, data) => {
        res.status = statusCodes.SERVICE_UNAVAILABLE;
        res.error(code, message, data);
    };

    res.gatewayTimeOut = (code, message, data) => {
        res.status = statusCodes.GATEWAY_TIME_OUT;
        res.error(code, message, data);
    };

    next();

};