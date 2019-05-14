import * as Router from 'koa-router';

function getSampleRoutes() {
  const router = new Router();

  router.get('/world', (ctx) => {
    ctx.status = 200;
    ctx.body = {
      data: 'Hello World',
    };
  });

  return router.routes();
}

export default getSampleRoutes;
