const { Sensor } = require('../models');
const mongoose = require('mongoose');
const generateSensorData = require('../utils/generateSensorData');

/**
 * Create a sensor data
 * @route POST /sensor/create
 */
exports.createSensor = async (_req, res, next) => {
  try {
    const newSensorData = generateSensorData();

    await newSensorData.save();

    res.status(201).json({ message: 'Sensor created', sensor: newSensorData });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a sensor data
 * @route DELETE /sensor/:id
 */
exports.deleteSensor = async (req, res, next) => {
  try {
    const { id: sensorId } = req.params;
    const isValidId = mongoose.isValidObjectId(sensorId);

    if (!isValidId) {
      return res.status(400).json({ message: 'Invalid ObjectID' });
    }

    const existingSensor = await Sensor.findByIdAndDelete(sensorId);

    if (!existingSensor) {
      return res.status(404).json({ message: 'Sensor not found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/**
 * Update sensor data
 * @route PUT /sensor/:id
 */
exports.updateSensor = async (req, res, next) => {
  try {
    const { id: sensorId } = req.params;

    const isValidId = mongoose.isValidObjectId(sensorId);

    if (!isValidId) {
      return res.status(400).json({ message: 'Invalid ObjectID' });
    }

    const updatedSensor = await Sensor.findByIdAndUpdate(
      sensorId,
      { ...req.body },
      { new: true }
    );

    if (!updatedSensor) {
      return res.status(404).json({ message: 'Sensor not found' });
    }

    res.status(200).json({ message: 'Sensor updated', sensor: updatedSensor });
  } catch (error) {
    next(error);
  }
};
