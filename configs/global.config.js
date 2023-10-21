const globalConfig = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sensor',
};

/* Log global configuration in DEV mode */
if (process.env.NODE_ENV !== 'production') {
  console.log('Server Configuration');
  console.log(JSON.stringify(globalConfig, null, 2));
}

module.exports = globalConfig;
