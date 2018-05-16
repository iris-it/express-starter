let jwtHelper = require('../../helpers/jwt');

module.exports = (token) => {

    let payload = jwtHelper.verify(token);

    if (payload !== false) {

        let jti = payload.jti;

        // let jti = payload.jti; // to blacklists

        // TODO if blacklisted throw error

        return true;

    }


    // return ok or the status of the blacklist

    return false;

};
