import * as Koa from 'koa';

import getRouter from 'routes/getRouter';
import handleError from './middleware/handleError';

function createApp() {
  const app = new Koa();

  const router = getRouter();

  app.use(handleError);

  app.use(router.allowedMethods());
  app.use(router.routes());

  return app;
}

export default createApp;
