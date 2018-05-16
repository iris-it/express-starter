const assert = require('chai').assert;

const cleanHelper = require('../../src/helpers/clean');


describe('Service Auth Helper', function () {

    before(function () {

        this.user_object = {
            'id': 1,
            'firstname': 'admin',
            'lastname': 'one',
            'email': 'admin_one@mail.fr',
            'phone': '0102030405',
            'created_at': '2018-05-14T11:54:25.000Z',
            'updated_at': '2018-05-14T11:54:25.000Z',
            'roles': [
                {
                    'id': 1,
                    'name': 'admin',
                    'description': 'Administrator',
                    'created_at': '2018-05-14T11:54:25.000Z',
                    'updated_at': '2018-05-14T11:54:25.000Z',
                    'permissions': [
                        {
                            'id': 1,
                            'name': 'view_users',
                            'description': 'View users',
                            'created_at': '2018-05-14T11:54:25.000Z',
                            'updated_at': '2018-05-14T11:54:25.000Z'
                        },
                        {
                            'id': 2,
                            'name': 'create_users',
                            'description': 'Create users',
                            'created_at': '2018-05-14T11:54:25.000Z',
                            'updated_at': '2018-05-14T11:54:25.000Z'
                        },
                        {
                            'id': 3,
                            'name': 'edit_users',
                            'description': 'Edit users',
                            'created_at': '2018-05-14T11:54:25.000Z',
                            'updated_at': '2018-05-14T11:54:25.000Z'
                        },
                        {
                            'id': 4,
                            'name': 'delete_users',
                            'description': 'Delete users',
                            'created_at': '2018-05-14T11:54:25.000Z',
                            'updated_at': '2018-05-14T11:54:25.000Z'
                        }
                    ]
                }
            ]
        };

        this.user_object_expected = {
            'user': {
                'id': 1,
                'firstname': 'admin',
                'lastname': 'one',
                'email': 'admin_one@mail.fr',
                'phone': '0102030405',
            },
            'roles': [
                'admin'
            ],
            'permissions': [
                'view_users',
                'create_users',
                'edit_users',
                'delete_users',
            ]

        };

    });

    describe('#clean_user_object()', function () {

        it('should return the cleaned user', function () {

            let result = cleanHelper.user(this.user_object);

            assert.deepEqual(result, this.user_object_expected);

        });

    });

})
;