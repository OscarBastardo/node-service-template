import * as Koa from 'koa';

import getRouter from 'routes/getRouter';
import handleError from './middleware/handleError';

function createServer() {
  const server = new Koa();

  const router = getRouter();

  server.use(handleError);

  server.use(router.allowedMethods());
  server.use(router.routes());

  return server;
}

export default createServer;
