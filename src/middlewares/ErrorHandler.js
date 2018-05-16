'use strict';

const errors = {

    DEFAULT_ERROR_CODE: {
        status: 500,
        message: 'Internal Server Error'
    },

    USER_NOT_FOUND: {
        status: 404,
        message: 'The user was not found'
    },


    BAD_CREDENTIALS: {
        status: 401,
        message: 'Bad credentials'
    },


};


function parseErrors(error) {

    let code;

    if (typeof error === 'string') {
        code = error;
    }
    else if (error instanceof Error) {
        code = error.message;
    }
    else if (error instanceof Object) {
        code = error.code;
    }
    else {
        code = 'DEFAULT_ERROR_CODE';
    }

    return {code};

}

module.exports = function (err, req, res, next) {

    let {code, message} = parseErrors(err);

    let error = errors[code];

    res.status(error.status);

    res.send(error);

    //next(err);
};

