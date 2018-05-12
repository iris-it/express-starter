# express-starter
Express rest api boilerplate


### Running locally

- create two mysql db `express_starter_development` and `express_starter_testing`
- run `npm install && npm update && npm run db:refresh && npm run watch`
- tests can be run `npm run lint && npm run test`
- debug mode can be activated in watch mode `npm run debug`


### Libraries

- Express
    - `express`
    - `body-parser`
    - `express-async-errors`
    - `helmet`

- Authentication / Authorization
    - `bcrypt`
    - `@slynova/fence`
    - Not fully implemented 

- Data Layer
    - `knex`
    - `objection`
    - `mysql`

- Logging
    - `morgan`
    - `winston`
    
- Testing / Linting
    - `mocha`
    - `chai`
    - `supertest`
    - `eslint`

- Utils
    - `app-root-path`
    - `nodemon`

### PROD
don't forget to set the NODE_ENV to production