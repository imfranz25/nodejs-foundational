/* Route Imports */
const sensorRoute = require('./sensor.route');

/* Middlewares */
const { loggerMiddleware, errorMiddleware } = require('../middlewares');

const useRoutes = (app) => {
  // Implement logger middleware
  app.use(loggerMiddleware);
  /* Use routes */
  app.use('/sensor', sensorRoute);
  /* Error handling middleware (use -> last) */
  app.use(errorMiddleware);
};

module.exports = useRoutes;
