const express = require('express');

const config = require('./utils/config');

/* Initialization */
const app = express();

/* Server Config */
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to Express API ~');
});

/* Start Express Server */
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
