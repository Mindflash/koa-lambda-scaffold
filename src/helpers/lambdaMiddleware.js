const {URL} = require('whatwg-url');

module.exports = (ctx, next) => {
	ctx.lambdaEvent = ctx.headers['x-apigateway-event'] && JSON.parse(decodeURIComponent(ctx.headers['x-apigateway-event'])) || {};
	ctx.lambdaContext = ctx.headers['x-apigateway-context'] && JSON.parse(decodeURIComponent(ctx.headers['x-apigateway-context'])) || {};
	ctx.env = ctx.lambdaEvent && ctx.lambdaEvent.stageVariables || process.env;

	// Workaround an inconsistency in APIG. For custom domains, it puts the
	// mapping prefix on the url, but non-custom domain requests do not. Fix it by
	// changing the path to the proxy param which has the correct value always.
	if (ctx.lambdaEvent.pathParameters && ctx.lambdaEvent.pathParameters.proxy) {
		const dummyBase = 'zz://zz';
		const url = new URL(ctx.url, dummyBase);
		url.pathname = '/' + ctx.lambdaEvent.pathParameters.proxy;
		ctx.url = url.href.replace(dummyBase, '');
	}
	return next();
};