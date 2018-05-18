let jwtHelper = require('../../helpers/jwt');

module.exports = (token) => {

    let payload = jwtHelper.verify(token);

    // let jti = payload.jti; // to blacklists
    // TODO if blacklisted throw error

    return jwtHelper.create(payload);


};
