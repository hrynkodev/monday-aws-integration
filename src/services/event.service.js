const AWS = require('aws-sdk');

const eventBridge = new AWS.EventBridge({ region: 'us-east-2' });

const putEvent = (event) => eventBridge.putEvents({
  Entries: [
    {
      EventBusName: 'mondaybus',
      Source: 'event-get.handler',
      DetailType: 'CardStatusChange',
      Detail: JSON.stringify(event),
    },
  ],
}).promise();

module.exports = {
  putEvent,
};
