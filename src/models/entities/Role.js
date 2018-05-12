const Model = require('./BaseModel');

class Role extends Model {

    // Table name is the only required property.
    static get tableName() {
        return 'roles';
    }

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static get jsonSchema() {

        return {
            type: 'object',

            required: ['name'],

            properties: {
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1, maxLength: 255},
                description: {type: 'string', minLength: 1, maxLength: 255}
            }
        };
    }

    static get relationMappings() {
        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + '/User',
                join: {
                    from: 'roles.id',
                    through: {
                        // persons_movies is the join table.
                        from: 'users_roles.role_id',
                        to: 'users_roles.user_id'
                    },
                    to: 'users.id'
                }
            },
            permissions: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + '/Permission',
                join: {
                    from: 'roles.id',
                    through: {
                        // persons_movies is the join table.
                        from: 'roles_permissions.role_id',
                        to: 'roles_permissions.permission_id'
                    },
                    to: 'permissions.id'
                }
            },
        };
    }
}

module.exports = Role;