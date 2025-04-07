// __tests__/server.test.js
const request = require('supertest');
const app = require('../server'); // Import the server we want to test

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200); // Ensure status is 200
    expect(response.text).toBe('Hello World'); // Verify the text in the response
  });
});
