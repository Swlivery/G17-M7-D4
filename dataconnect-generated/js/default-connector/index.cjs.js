const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'firebase-auth-demo',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

