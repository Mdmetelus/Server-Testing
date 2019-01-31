const request = require('supertest');

const server = require('./server.js');


describe('server.js', () => {
    describe('GET / endpoint', () => {
      it('should respond with status code 200 OK', async () => {
        let response = await request(server).get('/');
  
        expect(response.status).toBe(200);
      });
  
      it('should respond with Html/Text', async () => {
        let response = await request(server).get('/');
  
        expect(response.type).toMatch(/text/i);
      });
  
      it('should send back an string', async () => {
        const expected = `API working.\n Sanity Check\n Test Route!`;
  
        let response = await request(server).get('/');
  
        expect(response.body).toEqual(expected);
      });
    });