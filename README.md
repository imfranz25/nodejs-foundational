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

#### @GET /sensor/:id

```
http://localhost:3000/sensor/6537727744ccaeb65d65303b
```

Response

```
{
  "message": "Sensor fetched",
  "sensor": {
    "_id": "6537727744ccaeb65d65303b",
    "location": "Cavite",
    "temperature_celsius": 45,
    "humidity_percent": 51,
    "pressure_hpa": 1014,
    "createdAt": "2023-10-24T07:29:59.355Z",
    "updatedAt": "2023-10-24T07:29:59.355Z",
    "__v": 0
  }
}
```

#### @POST /sensor/create

```
http://localhost:3000/sensor/create
```

Request Body (JSON)

```
{
  "location": "string",
  "temperature_celsius": "number",
  "humidity_percent": "number",
  "pressure_hpa": "number"
}
```

Response

```
{
  "message": "Sensor created",
  "sensor": {
    "location": "Cavite",
    "temperature_celsius": 45,
    "humidity_percent": 51,
    "pressure_hpa": 1014,
    "_id": "6537727744ccaeb65d65303b",
    "createdAt": "2023-10-24T07:29:59.355Z",
    "updatedAt": "2023-10-24T07:29:59.355Z",
    "__v": 0
  }
}
```

#### @GET /sensor

```
http://localhost:3000/sensor
```

Request Body (JSON)

```
{
  "message": "Sensors fetched",
  "sensor": [
    {
      "_id": "6537711044ccaeb65d65302f",
      "location": "Location 2",
      "temperature_celsius": 20.64686720588577,
      "humidity_percent": 53,
      "pressure_hpa": 975,
      "createdAt": "2023-10-24T07:24:00.955Z",
      "updatedAt": "2023-10-24T07:24:00.955Z",
      "__v": 0
    },
    {
      "_id": "6537714c44ccaeb65d653031",
      "location": "Location 1",
      "temperature_celsius": 25.794430454886733,
      "humidity_percent": 99,
      "pressure_hpa": 1012,
      "createdAt": "2023-10-24T07:25:00.571Z",
      "updatedAt": "2023-10-24T07:25:00.571Z",
      "__v": 0
    },
  ]
}
```

#### @PUT /sensor/:id

```
http://localhost:3000/sensor/6533c8f84010fb3622c67e2a
```

Request Body (JSON)

```
{
  "location": "Cavite",
  "temperature_celsius": "45",
  "humidity_percent": "51",
  "pressure_hpa": "1014"
}
```

Response

```
{
  "message": "Sensor updated",
  "sensor": {
    "_id": "6533c8f84010fb3622c67e2a",
    "location": "Cavite",
    "temperature_celsius": 45,
    "humidity_percent": 51,
    "pressure_hpa": 1014,
    "createdAt": "2023-10-21T12:50:00.110Z",
    "updatedAt": "2023-10-24T07:35:56.931Z",
    "__v": 0
  }
}
```

#### @DELETE /sensor/:id

```
http://localhost:3000/sensor/6533c8f84010fb3622c67e2a
```

Response

```
Status (204) No Content
```
