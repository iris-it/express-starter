const http_status = require('http-status');

class BaseError extends Error {

    constructor({message, errors, status}) {

        super(message);

        this.name = this.constructor.name;

        this.message = message;

        this.errors = errors;

        this.status = status || http_status.INTERNAL_SERVER_ERROR;

        Error.captureStackTrace(this, this.constructor);

    }
}

module.exports = BaseError;