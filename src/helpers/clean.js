const _ = require('lodash');

exports.user = function (input) {

    let user = {
        id: input.id,
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        phone: input.phone
    };

    let roles = [];

    let permissions = [];

    if (input.roles !== undefined) {

        roles = input.roles.map(function (role) {

            if (role.permissions !== undefined) {

                permissions.push(role.permissions.map(function (permission) {
                    return permission.name;
                }));

            }

            return role.name;

        });
    }

    permissions = _.uniq(_.flatten(permissions));

    return {
        user,
        roles,
        permissions
    };


};
