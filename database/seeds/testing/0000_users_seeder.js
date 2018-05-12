let bcrypt = require('bcrypt');

exports.seed = function (knex) {

    // Deletes ALL existing entries
    return knex('users').del().then(function () {

        // Inserts seed entries
        return knex('users').insert([
            {
                id: 1,
                firstname: 'admin',
                lastname: 'one',
                email: 'admin_one@mail.fr',
                phone: '0102030405',
                password: bcrypt.hashSync('123123', 10)
            },
            {
                id: 2,
                firstname: 'manager',
                lastname: 'two',
                email: 'manager_two@mail.fr',
                phone: '0102030405',
                password: bcrypt.hashSync('123123', 10)
            },
            {
                id: 3,
                firstname: 'user',
                lastname: 'three',
                email: 'user_three@mail.fr',
                phone: '0102030405',
                password: bcrypt.hashSync('123123', 10)
            }
        ]);

    });
};
