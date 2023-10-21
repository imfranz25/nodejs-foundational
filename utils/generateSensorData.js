const { Sensor } = require('../models/index');

/**
 * Generate a sensor data using the sensor mongoose model
 * @returns {Sensor}
 * @see Sensor
 */
const generateSensorData = () => {
  const newSensor = new Sensor({
    location: `Location${Math.floor(Math.random() * 3) + 1}`, // random location
    temperature_celsius: Math.random() * 15 + 20, // random temperature between 20 and 35
    humidity_percent: Math.floor(Math.random() * 100), // random humidity
    pressure_hpa: Math.floor(Math.random() * 50) + 970, // random pressure between 970 and 1020
  });

  return newSensor;
};

module.exports = generateSensorData;
