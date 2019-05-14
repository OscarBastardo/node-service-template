import * as Koa from 'koa';

import createApp from './createApp';

describe('createApp', () => {
  it('should create an instance of Koa app', () => {
    const app = createApp();
    expect(app).toBeInstanceOf(Koa);
  });
});
