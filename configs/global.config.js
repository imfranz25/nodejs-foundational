const globalConfig = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sensor',
  EMAIL_USERNAME: process.env.EMAIL_USERNAME || 'No email username set',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'No Google client ID set',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'No Google secret set',
  GOOGLE_REFRESH_TOKEN:
    process.env.GOOGLE_REFRESH_TOKEN || 'No Google refresh token set',
  REDIRECT_URI: 'https://developers.google.com/oauthplayground/',
};

/* Log global configuration in DEV mode */
if (process.env.NODE_ENV !== 'production') {
  console.log('Server Configuration');
  console.log(JSON.stringify(globalConfig, null, 2));
}

module.exports = globalConfig;
