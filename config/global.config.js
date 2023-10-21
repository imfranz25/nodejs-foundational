const logger = require('./winston.config');

const globalConfig = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sensor',
};

/* Log global configuration */
logger.info(JSON.stringify(globalConfig, null, 2));

module.exports = globalConfig;
