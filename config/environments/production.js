let appRoot = require('app-root-path');

let app_name = 'express_starter';

module.exports = {

    name: app_name,

    port: 1337,

    winston: {
        file: {
            level: 'info',
            filename: `${appRoot}/storage/logs/production.log`,
            handleExceptions: true,
            json: false,
            tailable: true,
            maxsize: 1024 * 1024 * 5, // ~1mb
            maxFiles: 10,
            colorize: false,
        },
        console: {
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
        }
    },

    knex: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            database: `${app_name}_production`,
            user: 'root',
            password: ''
        },
        migrations: {
            tableName: 'migrations',
            directory: `${appRoot}/database/migrations`
        },
        seeds: {
            directory: `${appRoot}/database/seeds/production`
        }
    }


};
