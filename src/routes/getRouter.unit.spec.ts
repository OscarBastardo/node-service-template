import * as Router from 'koa-router';

import getRouter from './getRouter';

describe('getRouter', () => {
  it('should return an instance of a Koa Router object', () => {
    const instance = getRouter();
    expect(instance).toBeInstanceOf(Router);
  });
});
