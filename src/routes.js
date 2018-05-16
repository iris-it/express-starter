let express = require('express');
let router = express.Router();
let express_jwt = require('express-jwt');
let config = require('../config')();

/*
 * Controllers imports
 */

let HealthController = require('./controllers/HealthController');
let AuthController = require('./controllers/AuthController');
// let UsersController = require('./controllers/UsersController');

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
router.post('/login', AuthController.login);
router.post('/refresh', AuthController.refresh);

/*
 * Users
 */
// router.get('/users', UsersController.all);
// router.get('/users/:id', UsersController.one);


module.exports = router;