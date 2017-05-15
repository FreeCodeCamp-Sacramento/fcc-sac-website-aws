'use strict';
const CONFIG = require('./config');
const http =  require('http');
const template = require('./template');
const SparkPost = require('sparkpost');

let sparkpostClient = new SparkPost(CONFIG.sparkpostKey);

// handler for AWS
exports.handler = function (event, context) {
  console.log('Received event:', event)
  const formEmailPromise = new Promise((resolve, reject) => {
      sendFormEmail(event, resolve, reject);
  });

  formEmailPromise
    .then(() => { context.done(null); })
    .catch((err) => { context.done(err, 1); });
}

// send form email via sparkpost
function sendFormEmail(event, resolve, reject) {
  sparkpostClient.transmissions.send({
    content: {
      from: CONFIG.fromEmail,
      subject: CONFIG.subject,
      html: template.emailTemplate(event)
    },
    recipients: [
      {address: CONFIG.toEmail}
    ]
  })
  .then(data => {
    console.log('Sent Form Mail!');
    resolve("Success! Sent Mail!")
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
    reject(err);
  });
}

