const Model = require('./BaseModel');

class User extends Model {

    // Table name is the only required property.
    static get tableName() {
        return 'users';
    }

    static get hidden () {
        return ['password'];
    }

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static get jsonSchema() {
        return {
            type: 'object',

            required: ['firstname', 'lastname', 'email'],

            properties: {
                id: {type: 'integer'},
                firstname: {type: 'string', minLength: 1, maxLength: 255},
                lastname: {type: 'string', minLength: 1, maxLength: 255},
                email: {type: 'string'},
                phone: {type: ['string', 'null']},
                password: {type: 'string'}
            }
        };
    }

    static get relationMappings() {
        return {
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + '/Role',
                join: {
                    from: 'users.id',
                    through: {
                        from: 'users_roles.user_id',
                        to: 'users_roles.role_id'
                    },
                    to: 'roles.id'
                }
            }
        };
    }

    // TODO Add method for checking is the user has the role ( provides string/array of roles )

}

module.exports = User;