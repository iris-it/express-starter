const bcrypt = require('bcrypt');

exports.hash_password = async function (password) {

    return await bcrypt.hash(password, 10);

};

exports.compare_password = async function (password, hash) {

    return await bcrypt.compare(password, hash);
    
};