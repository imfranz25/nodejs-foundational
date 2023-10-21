const { Sensor } = require('../models');
const generateSensorData = require('../utils/generateSensorData');

/**
 * Create a sensor data
 * @route POST /create
 */
exports.createSensor = async (_req, res, next) => {
  try {
    const newSensorData = generateSensorData();

    await newSensorData.save();

    res.send({ message: 'Sensor created' });
  } catch (error) {
    next(error);
  }
};
