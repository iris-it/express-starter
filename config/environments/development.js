let appRoot = require('app-root-path');

let app_name = 'express_starter';

module.exports = {

    name: app_name,

    port: 1337,

    winston: {
        file: {
            level: 'debug',
            filename: `${appRoot}/storage/logs/development.log`,
            handleExceptions: true,
            json: false,
            tailable: true,
            showLevel: true,
            maxsize: 1024 * 1024, // ~1mb
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
            database: `${app_name}_development`,
            user: 'root',
            password: ''
        },
        migrations: {
            tableName: 'migrations',
            directory: `${appRoot}/database/migrations`
        },
        seeds: {
            directory: `${appRoot}/database/seeds/testing`
        }
    }

};
