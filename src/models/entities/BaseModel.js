const visibilityPlugin = require('objection-visibility');

let {Model} = require('../datasources/objection');


Model = visibilityPlugin(Model);

class BaseModel extends Model {

}

module.exports = BaseModel;