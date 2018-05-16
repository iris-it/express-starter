exports.extract_token = function (request) {

    if (typeof request.headers !== 'undefined') {
        if (typeof request.headers.authorization !== 'undefined') {
            if (request.headers.authorization.split(' ')[0] === 'Bearer') {
                return request.headers.authorization.split(' ')[1] || false;
            }
        }
    }

    if (typeof  request.query !== 'undefined') {
        if (typeof  request.query.token !== 'undefined') {
            return request.query.token || false;
        }
    }

    return false;

};