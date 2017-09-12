const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
app.proxy = true;
const server = awsServerlessExpress.createServer(app.callback());
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
