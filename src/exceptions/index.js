const BaseError = require('./BaseError');
const BadRequestException = require('./BadRequestException');
const ForbiddenException = require('./ForbiddenException');
const UnauthorizedException = require('./UnauthorizedException');
const NotFoundException = require('./NotFoundException');
const UnprocessableEntityException = require('./UnprocessableEntityException');


module.exports = {
    BaseError,
    BadRequestException,
    ForbiddenException,
    UnauthorizedException,
    NotFoundException,
    UnprocessableEntityException
};