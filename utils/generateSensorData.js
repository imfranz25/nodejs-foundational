const { Sensor } = require('../models/index');

/**
 * Generate a sensor data using the sensor mongoose model
 * @returns {Sensor}
 * @see Sensor
 */
const generateSensorData = ({
  location = `Location ${Math.floor(Math.random() * 3) + 1}`, // random location
  temperature_celsius = Math.random() * 15 + 20, // random temperature between 20 and 35
  humidity_percent = Math.floor(Math.random() * 100), // random humidity
  pressure_hpa = Math.floor(Math.random() * 50) + 970, // random pressure between 970 and 1020
}) => {
  const newSensor = new Sensor({
    location,
    temperature_celsius,
    humidity_percent,
    pressure_hpa,
  });

  return newSensor;
};

module.exports = generateSensorData;
