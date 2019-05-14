import handleError from './handleError'

describe('handleError', () => {
  it('should handle an error', async () => {
    const message = 'test error'
    const ctx: any = {
      app: {
        emit: (id: string, err: any, ctx: any) => {}
      }
    };
    const next = () => {
      throw new Error(message);
    };
    await handleError(ctx, next);
    
    expect(ctx.body).toBe(message)
  })
})