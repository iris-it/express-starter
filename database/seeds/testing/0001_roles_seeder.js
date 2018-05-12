exports.seed = function (knex) {

    // Deletes ALL existing entries
    return knex('roles').del().then(function () {

        // Inserts seed entries
        return knex('roles').insert([
            {id: 1, name: 'admin', description: 'Administrator'},
            {id: 2, name: 'manager', description: 'Manager'},
            {id: 3, name: 'user', description: 'User'}
        ]);

    });
};
