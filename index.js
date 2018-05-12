const config = require('./config')();
const logger = require('./config/logger');

/*
 * App Instance
 */

let app = require('./src/app');

/*
 * Error Middleware
 */

if (process.env.NODE_ENV !== 'production') {

    app.use(async (err, req, res, next) => {

        // winstons
        logger.error(err);

        // print the error as response
        res.status(500);
        res.json({
            message: err.message,
            error: err,
        });

        next(err);

    });

} else {

    app.use((err, req, res, next) => {
        logger.error(err);
        next(err);
    });

}

/*
 * Start Server
 */

const server = app.listen(config.port, () => {
    logger.info('listening on port %s', server.address().port);
});

/*
 * Server Error Handling
 */

server.on('error', function (error) {

    if (error.syscall !== 'listen') {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(config.port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(config.port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }

});

