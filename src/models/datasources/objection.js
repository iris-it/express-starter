const Knex = require('knex');

const {Model} = require('objection');

const config = require('../../../config')();

// Initialize knex.
const knex = Knex(config.knex);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

module.exports = {
    knex,
    Model
};