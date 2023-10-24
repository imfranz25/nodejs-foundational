const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const globalConfig = require('../configs/global.config');
const logger = require('../configs/winston.config');

/**
 * Google OAuth 2 initialization
 */
const oAuth2Client = new google.auth.OAuth2(
  globalConfig.GOOGLE_CLIENT_ID,
  globalConfig.GOOGLE_SECRET,
  globalConfig.REDIRECT_URI
);

/* Set refresh token -> oauth credentials */
oAuth2Client.setCredentials({
  refresh_token: globalConfig.GOOGLE_REFRESH_TOKEN,
});

/**
 * Generate a transport (email auth config)
 * @returns {transporter} nodemailer
 */
const generateTransport = async () => {
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: globalConfig.EMAIL_USERNAME,
      clientId: globalConfig.GOOGLE_CLIENT_ID,
      clientSecret: globalConfig.GOOGLE_SECRET,
      refreshToken: globalConfig.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  return transporter;
};

/**
 * Send an email using gmail api w/ nodemailer
 * @param {string} subject
 * @param {string} html
 * @param {string[]} recipients=[]
 * @returns {void}
 */
const sendMail = async ({ subject, html, recipients = [] }) => {
  const transporter = await generateTransport();

  const emailDetails = await transporter.sendMail({
    from: `Module 2 Mini Project <${globalConfig.EMAIL_USERNAME}>`,
    to: recipients,
    subject,
    html,
  });

  logger.info(JSON.stringify(emailDetails, null, 2));
};

module.exports = sendMail;
