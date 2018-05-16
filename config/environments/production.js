let appRoot = require('app-root-path');

let fs = require('fs');

let app_name = 'express_starter';

module.exports = {

    name: app_name,

    port: process.env.APP_PORT || 1337,

    jwt: {
        secret: fs.readFileSync(`${appRoot}/storage/keys/jwt/private.key`),
        config: {
            algorithm: 'RS256',
            expiresIn: '1h',
            issuer: app_name,
            subject: 'user'
        }
    },

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
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3306,
            database: process.env.DB_NAME || `${app_name}_production`,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || ''
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
