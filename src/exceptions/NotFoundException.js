const http_status = require('http-status');

const BaseError = require('./BaseError');

class NotFoundException extends BaseError {

    constructor({message, errors, status = http_status.NOT_FOUND}) {

        super({message, errors, status});
    }

}

module.exports = NotFoundException;