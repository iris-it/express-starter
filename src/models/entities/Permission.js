const Model = require('./BaseModel');

class Permission extends Model {

    // Table name is the only required property.
    static get tableName() {
        return 'permissions';
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
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + '/Role',
                join: {
                    from: 'permissions.id',
                    through: {
                        // persons_movies is the join table.
                        from: 'roles_permissions.permission_id',
                        to: 'roles_permissions.role_id'
                    },
                    to: 'roles.id'
                }
            }
        };
    }
}

module.exports = Permission;