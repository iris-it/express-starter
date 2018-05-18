const httpStatus = require('http-status');

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err, req, res, next) => {

    const response = {
        code: err.status,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
    };

    res.status(err.status);
    res.json(response);
    res.end();

    next(err);
};

exports.handler = handler;

// /**
//  * If error is not an instanceOf APIError, convert it.
//  * @public
//  */
// exports.converter = (err, req, res, next) => {
//
//     let convertedError = err;
//
//     if (err instanceof expressValidation.ValidationError) {
//
//         convertedError = new APIError({
//             message: 'Erro de Validação',
//             errors: err.errors,
//             status: err.status,
//             stack: err.stack,
//         });
//
//     }
//
//     return handler(convertedError, req, res);
//
// };