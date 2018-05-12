exports.up = function (knex) {

    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('firstname');
        table.string('lastname');
        table.string('email');
        table.string('phone').nullable();
        table.string('password');
        table.timestamps(true, true);
    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('users');

};
