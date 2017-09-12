# koa-lambda-scaffold
Basic example of Koa, transpiled via Babel, and deployed to Lambda running Node 6. Also allows running the service locally for convenient dev experience on Node 8.

`npm run create` Sets everything in Lambda and AWS Api Gateway and does an initial deploy to `latest`.

`npm run deploy` Deploys what you have to `latest`. Note that this should probably be part of some CI process that runs tests first, etc.

`npm run promote-prod` Promotes `latest` to `prod`.

`npm start` Runs the Koa service locally for dev.


Includes middleware to extract `lambdaEvent` and `lambdaContext` from the headers and place them on `ctx`. Also populates `ctx.env` with process environment variables when run locally and stage variables when run in Api Gateway. Finally, fixes an odditity in the way APIG handles custom domains so that `url` is consistent whether run locally or in Lambda with or without custom domain mappings.
