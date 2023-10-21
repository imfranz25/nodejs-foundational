/* Route Imports */
const sensorRoute = require('./sensor.route');

/* Middlewares */
const loggerMiddleware = require('../middlewares/loggerMiddleware');
const handleError = require('../middlewares/errorMiddleware');

const useRoutes = (app) => {
  // Implement logger middleware
  app.use(loggerMiddleware);
  /* Use routes */
  app.use(sensorRoute);
  // Error handling middleware (use -> last)
  app.use(handleError);
};

module.exports = useRoutes;
