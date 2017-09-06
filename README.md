# koa-lambda-scaffold
Basic example of Koa, transpiled via Babel, and deployed to Lambda. Also allows running the service locally for convenient dev experience.

`npm run create` Sets everything in Lambda and AWS Api Gateway and does an initial deploy to `latest`.

`npm run deploy` Deploys what you have to `latest`. Note that this should probably be part of some CI process that runs tests first, etc.

`npm run promote-prod` Promotes `latest` to `prod`.

`npm start` Runs the Koa service locally for dev.
