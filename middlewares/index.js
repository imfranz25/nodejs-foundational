const errorMiddleware = require('./error.middleware');
const loggerMiddleware = require('./logger.middleware');
const validatorMiddleware = require('./validator.middleware');

module.exports = {
  errorMiddleware,
  loggerMiddleware,
  validatorMiddleware,
};
