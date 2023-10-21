require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config/global.config');

/* Initialization */
const app = express();

/* Server Config */
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  res.send('Welcome to Express API ~');
});

/* Start Express Server */
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
