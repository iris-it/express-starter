const http_status = require('http-status');

const BaseError = require('./BaseError');

class ForbiddenException extends BaseError {

    constructor({message, errors, status = http_status.FORBIDDEN}) {

        super({message, errors, status});
    }

}

module.exports = ForbiddenException;