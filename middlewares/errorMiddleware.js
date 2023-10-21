const logger = require('../configs/winston.config');

const handleError = (err, req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message,
    stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
  });

  logger.error(
    `${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
};

module.exports = handleError;
