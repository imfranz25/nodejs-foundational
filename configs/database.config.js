const mongoose = require('mongoose');
const logger = require('./winston.config');
const globalConfig = require('./global.config');

const connectDB = async () => {
  try {
    await mongoose.connect(globalConfig.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    logger.info('MongoDB connected...');
  } catch (err) {
    logger.error('Database connection error', err);
    process.exit(1);
  }
};

module.exports = connectDB;
