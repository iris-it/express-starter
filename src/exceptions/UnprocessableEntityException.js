const http_status = require('http-status');

const BaseError = require('./BaseError');

class UnprocessableEntityException extends BaseError {

    constructor({message, errors, status = http_status.UNPROCESSABLE_ENTITY}) {

        super({message, errors, status});
    }

}

module.exports = UnprocessableEntityException;