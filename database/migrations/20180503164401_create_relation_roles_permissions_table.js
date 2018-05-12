exports.up = function (knex) {

    return knex.schema.createTable('roles_permissions', function (table) {

        table.integer('role_id').unsigned();
        table.integer('permission_id').unsigned();

        table.foreign('role_id')
            .references('id')
            .on('roles')
            .onUpdate('cascade')
            .onDelete('cascade');

        table.foreign('permission_id')
            .references('id')
            .on('permissions')
            .onUpdate('cascade')
            .onDelete('cascade');

        table.primary(['role_id', 'permission_id']);

    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('roles_permissions');

};
