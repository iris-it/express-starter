let express = require('express');
let router = express.Router();

/*
 * Controllers imports
 */

let HealthController = require('./controllers/HealthController');
let AuthController = require('./controllers/AuthController');
let UsersController = require('./controllers/UsersController');

/*
 * Routes definitions
 */

/*
 * Health Check
 */
router.all('/ping', HealthController.ping);

/*
 * Auth
 */
router.post('/login', AuthController.login);

/*
 * Users
 */
router.get('/users', UsersController.all);
router.get('/users/:id', UsersController.one);


module.exports = router;