const express = require('express');
const router = express.Router();

const express_jwt = require('express-jwt');
const {checkSchema} = require('express-validator/check');

const config = require('../config')();


/*
 * Validators & Controllers imports
 */
const {auth_login_validator} = require('./http/validators');

const HealthController = require('./http/controllers/health');
const AuthController = require('./http/controllers/auth');
// const UsersController = require('./http/controllers/users');

/*
 * Routes Middleware
 */
router.use(express_jwt({secret: config.jwt.secret}).unless({
    path: [
        '/ping',
        '/login'
    ]
}));

/*
 * Health Check
 */
router.all('/ping', HealthController.ping);

/*
 * Auth
 */
router.post('/login', checkSchema(auth_login_validator), AuthController.login);
router.post('/refresh', AuthController.refresh);
router.post('/logout', AuthController.logout);

/*
 * Users
 */
// router.get('/users', UsersController.all);
// router.get('/users/:id', UsersController.one);


module.exports = router;