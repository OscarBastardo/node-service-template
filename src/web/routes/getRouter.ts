import * as Router from 'koa-router';

import getSampleRoutes from './getSampleRoutes';

function getRouter(): Router {
  const router = new Router();

  const sample = getSampleRoutes();

  router.use('/hello', sample);

  return router;
}

export default getRouter;
