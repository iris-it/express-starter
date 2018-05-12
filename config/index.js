let development = require('./environments/development');
let testing = require('./environments/testing');
let production = require('./environments/production');

let environment = process.env.NODE_ENV;

module.exports = () => {

    switch (environment) {
        case 'development':
            return development;

        case 'test':
            return testing;

        case 'production':
            return production;

        default:
            return development;
    }
};