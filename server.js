require('dotenv').config();
const express = require('express');
const cors = require('cors');
const globalConfig = require('./configs/global.config');
const useRoutes = require('./routes/index');
const scheduleSensor = require('./utils/scheduleSensor');
const connectDB = require('./configs/database.config');
const sendMail = require('./utils/sendMail');

/* Initialization */
const app = express();

/* Server Config */
app.use(express.json());
app.use(cors());

/* Initialize database connection */
connectDB();

/* Route configuration */
useRoutes(app);

/* Cron jobs */
scheduleSensor();

/* Start Express Server */
app.listen(globalConfig.PORT, () => {
  console.log(`Server is running on port ${globalConfig.PORT}`);
});
