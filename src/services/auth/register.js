const bcrypt = require('bcrypt');

let {User} = require('../../models/index');

let cleanHelper = require('../../helpers/clean');
let jwtHelper = require('../../helpers/jwt');


module.exports = async (email, password) => {

    let db_user = await User.query().findOne({'email': email}).eager('[roles.permissions]');

    if (db_user) {
        return {success: false, message: 'User not found', code: 404};
    }

    let correct_password = await bcrypt.compare(password, db_user.password);

    if (!correct_password) {
        return {success: false, message: 'Bad password', code: 400};
    }

    let payload = cleanHelper.user(db_user);

    let token = await jwtHelper.create(payload);

    return {success: true, token, code: 200};

    // issue JWT

    // https://www.npmjs.com/package/express-jwt
    // https://www.npmjs.com/package/jsonwebtoken
    // https://www.npmjs.com/package/express-jwt-permissions

    // https://auth0.com/learn/refresh-tokens/
    // https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

    // https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
    // https://github.com/auth0/node-jsonwebtoken/issues/412

    // https://datatracker.ietf.org/doc/draft-ietf-oauth-json-web-token/08/?include_text=1
    // http://jwt-auth.readthedocs.io/en/develop/quick-start/

    // BLACKLIST WITH REDIS ( as cache )
    // https://community.risingstack.com/redis-node-js-introduction-to-caching/

};
