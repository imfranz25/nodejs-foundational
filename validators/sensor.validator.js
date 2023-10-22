const { body } = require('express-validator');

exports.createSensorValidator = [
  body('location')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Location must be at least 3 characters'),

  body('temperature_celsius')
    .isNumeric()
    .withMessage('Must be a valid temperature (celsius)'),

  body('humidity_percent')
    .isNumeric()
    .withMessage('Must be a valid humidity (percent)'),

  body('pressure_hpa')
    .isNumeric()
    .withMessage('Must be a valid pressure value (hpa)'),
];
