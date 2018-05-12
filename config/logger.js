let config = require('./index')();

let winston = require('winston');

// instantiate a new Winston Logger with the settings defined above
let logger = new winston.Logger({
    transports: [
        new winston.transports.Console(config.winston.console),
        new winston.transports.File(config.winston.file)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function (message) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};

module.exports = logger;