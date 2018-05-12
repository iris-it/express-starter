exports.up = function (knex) {

    return knex.schema.createTable('users_roles', function (table) {

        table.integer('user_id').unsigned();
        table.integer('role_id').unsigned();

        table.foreign('user_id')
            .references('id')
            .on('users')
            .onUpdate('cascade')
            .onDelete('cascade');

        table.foreign('role_id')
            .references('id')
            .on('roles')
            .onUpdate('cascade')
            .onDelete('cascade');


        table.primary(['user_id', 'role_id']);

    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('users_roles');

};
