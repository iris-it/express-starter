const http_status = require('http-status');

const BaseError = require('./BaseError');

class UnauthorizedException extends BaseError {

    constructor({message, errors, status = http_status.UNAUTHORIZED}) {

        super({message, errors, status});
    }

}


module.exports = UnauthorizedException;