import * as request from 'supertest';
import createApp from 'src/web/app/createApp';

describe('GET /hello/world', () => {
  it('should respond 200 OK with Hello World body', async () => {
    const server = createApp();
    const app = server.listen(5000);
    const response = await request(app).get('/hello/world');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual('Hello World');
    app.close();
  });
});
