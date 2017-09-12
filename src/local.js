const http = require('http');
const app = require('./app');

const localPort = 3000;

http.createServer(app.callback()).listen(localPort, (err, result) => {
	console.log('Local Lambda Likely Listening:', localPort);
});