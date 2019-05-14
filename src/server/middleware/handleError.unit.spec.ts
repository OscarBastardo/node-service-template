import handleError from './handleError';

describe('handleError', () => {
  it('should handle an error', async () => {
    const message = 'test error';
    const ctx: any = {
      app: {
        emit: (id: string, err: any, ctx: any) => {}
      },
    };
    const next = () => {
      throw new Error(message);
    };
    await handleError(ctx, next);

    expect(ctx.body).toBe(message);
  });

  it('should handle no errors', async () => {
    const body = 'error-free body';
    const ctx: any = {
      body,
    };
    const next = jest.fn(() => {
      expect(ctx.body).toBe(body);
    });

    await handleError(ctx, next);
  });
});
