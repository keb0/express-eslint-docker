const request = require('supertest');
const app = require('../app');

describe('/login', () => {
  it('it returns status code is 200', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  it('it returns status code is 200', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(444);
  });
});

