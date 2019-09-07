const {factory} = require('factory-girl');
const ObjectionAdapter = require('factory-girl-objection-adapter');
require('./userFactory')(factory);
require('./noteFactory')(factory);

factory.setAdapter(new ObjectionAdapter());

module.exports = factory;
