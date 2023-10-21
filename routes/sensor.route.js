const express = require('express');
const router = express.Router();

/* File Imports */
const { sensorController } = require('../controllers');

// prettier-ignore
router
  .route('/create')
  .post(sensorController.createSensor);

module.exports = router;
