const express = require('express');

const { sensorValidator } = require('../validators');
const { sensorController } = require('../controllers');
const { validatorMiddleware } = require('../middlewares');

/* Initialization */
const router = express.Router();

/**
 * --------------
 * @route /sensor
 * --------------
 */

/* Get all sensor */
router.route('/').get(sensorController.getAllSensor);

/* Create */
router
  .route('/create')
  .all(sensorValidator.createSensorValidator)
  .all(validatorMiddleware)
  .post(sensorController.createSensor);

/* Get and Delete */
router
  .route('/:id')
  .get(sensorController.getSensor)
  .delete(sensorController.deleteSensor);

/* Update */
router
  .route('/:id')
  .all(sensorValidator.createSensorValidator)
  .all(validatorMiddleware)
  .put(sensorController.updateSensor);

module.exports = router;
