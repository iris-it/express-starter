const config = require('./config')();
const logger = require('./config/logger');

/*
 * App Instance
 */

let app = require('./src/app');


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

