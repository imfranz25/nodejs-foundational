# Restful API

Welcome to the Module's 2 Mini Project (Sensor - Restful API)

## Table of contents

- Getting Started
  - [Requirements](#requirements)
  - [Technologies Used](#technologies-used)
  - [Project Configuration](#project-configuration)
  - [Folder Structure](#folder-structure)
  - [API Specification](#api-specification)

## Getting started

### Requirements

Before starting, make sure you have the following technologies installed on your local workstation:

- [nodejs](https://nodejs.org/)
- [IDE - (preferred - VS Code)](https://code.visualstudio.com/)

### Technologies Used

- [express](https://expressjs.com)
- [mongoose](https://mongoosejs.com/)
- [nodemailer](https://nodemailer.com/)

### Project configuration

Clone your project to your local machine.

```sh
$ git clone https://github.com/imfranz25/nodejs-foundational/tree/module-2-mini-project
```

The next thing will be to install all the dependencies of the project.

```sh
$ cd /your-project-name
$ npm install
```

Once the dependencies are installed, you can now create a new `.env` file containing your environment variables used for development.

```sh
#.env example

# Database
MONGO_URI=

# Nodemailer - email authentication
EMAIL_USERNAME=
GOOGLE_CLIENT_ID=
GOOGLE_SECRET=
GOOGLE_REFRESH_TOKEN=
NOTIFICATION_RECEIVER=
```

Finally execute the app server by running the following command.

```sh
$ npm run dev
```

For production, use the start command

```sh
$ npm run start
```

## Folder Structure

```
┣ configs/
┃ ┣ database.config.js
┃ ┣ global.config.js
┃ ┗ winston.config.js
┣ controllers/
┃ ┣ index.js
┃ ┗ sensor.controller.js
┣ logs/
┃ ┣ combined.log
┃ ┗ error.log
┣ middlewares/
┃ ┣ error.middleware.js
┃ ┣ index.js
┃ ┣ logger.middleware.js
┃ ┗ validator.middleware.js
┣ models/
┃ ┣ index.js
┃ ┗ sensor.model.js
┣ routes/
┃ ┣ index.js
┃ ┗ sensor.route.js
┣ utils/
┃ ┣ generateSensorData.js
┃ ┣ generateThresholdHTML.js
┃ ┣ scheduleSensor.js
┃ ┗ sendMail.js
┣ validators/
┃ ┣ index.js
┃ ┗ sensor.validator.js
┣ .env.example
┣ .gitignore
┣ package-lock.json
┣ package.json
┣ README.md
┗ server.js
```

### API Specification
