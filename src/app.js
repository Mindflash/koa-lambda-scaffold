const Koa = require('koa');
const app = new Koa();

app.use(require('./helpers/lambdaMiddleware'));

app.use(async ctx => {
	console.log('This will appear in cloudwatch', ctx);

	ctx.body = `Hello World from Koa!!! \nurl: ${ctx.url}`;
});

module.exports = app;