const http_status = require('http-status');

const BaseError = require('./BaseError');

class BadRequestException extends BaseError {

    constructor({message, errors, status = http_status.BAD_REQUEST}) {

        super({message, errors, status});
    }

}

module.exports = BadRequestException;