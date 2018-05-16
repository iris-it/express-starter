const uuidv4 = require('uuid/v4');

const jwt = require('jsonwebtoken');

let config = require('../../config/index')();
let logger = require('../../config/logger');

exports.create = function (payload) {

    // delete payload.iat; // the time at which the JWT was issued.
    // delete payload.iss; // the principal that issued the JWT.
    // delete payload.exp; // expiration time on or after which the JWT MUST NOT be accepted for processing
    // delete payload.sub; // the principal that is the subject of the JWT
    // delete payload.nbf; // the time before which the JWT MUST NOT be accepted for processing
    // delete payload.jti; // unique identifier for the JWT, New token, New ID

    let additional = {
        jwtid: uuidv4()
    };

    return jwt.sign(payload, config.jwt.secret, {...config.jwt.config, ...additional});

};

exports.verify = function (token) {

    jwt.verify(token, config.jwt.secret, config.jwt.config, function (err, decoded) {

        if (err) {

            logger.warn(err);

            return false;

        }

        return decoded;

    });

};