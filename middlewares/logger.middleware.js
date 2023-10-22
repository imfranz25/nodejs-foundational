const logger = require('../configs/winston.config');

const loggerMiddleware = (req, _res, next) => {
  logger.info(`Handled ${req.method} request from ${req.originalUrl}`);

  next();
};

module.exports = loggerMiddleware;
