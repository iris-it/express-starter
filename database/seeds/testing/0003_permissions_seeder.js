exports.seed = function (knex) {

    // Deletes ALL existing entries
    return knex('permissions').del().then(function () {

        // Inserts seed entries
        return knex('permissions').insert([
            {id: 1, name: 'view_users', description: 'View users'},
            {id: 2, name: 'create_users', description: 'Create users'},
            {id: 3, name: 'edit_users', description: 'Edit users'},
            {id: 4, name: 'delete_users', description: 'Delete users'}
        ]);

    });
};
