let express = require('express');
require('express-async-errors');

let morgan = require('morgan');
let helmet = require('helmet');
let bodyParser = require('body-parser');

/*
 * Internals
 */
let logger = require('../config/logger');

/*
 * Express
 */

let app = express();

/*
 * Common Middleware
 */

app.use(morgan('combined', {stream: logger.stream}));
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*
 * Custom Middleware
 */

// app.use(require('./middlewares/ResponseHandler'));

/*
 * Routes
 */

app.use('/', require('./routes'));


/*
 * Error Handler
 */
// app.use(require('./middlewares/ErrorHandler'));


app.use(require('./http/middlewares/error').handler);


//
// if (process.env.NODE_ENV !== 'production') {
//
//     app.use((err, req, res, next) => {
//
//         // winston
//         logger.error(err);
//
//         // print the error as response
//         res.send({
//             message: err.message,
//             name: err.name,
//         }, err.status || 500);
//
//         next(err);
//
//     });
//
// } else {
//
//     app.use((err, req, res, next) => {
//
//         // winston
//         logger.error(err);
//
//         // print the error as response
//         res.send(err.message, 500);
//
//         next(err);
//
//     });
//
// }


/*
 * Can be mounted anywhere
 */
module.exports = app;