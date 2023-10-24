const cron = require('node-cron');
const logger = require('../configs/winston.config');
const generateSensorData = require('./generateSensorData');

/**
 * Create sensor data every 1 minute
 * @returns {void}
 */
const scheduleSensor = () => {
  cron.schedule('*/1 * * * *', async () => {
    logger.info('Generating simulated sensor data...');

    const newSensorData = generateSensorData({});

    try {
      await newSensorData.save();

      logger.info(`Simulated data inserted`);
    } catch (error) {
      logger.error(`Error inserting simulated data: ${error}`);
    }
  });
};

module.exports = scheduleSensor;
