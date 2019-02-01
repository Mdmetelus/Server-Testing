const request = require('supertest');

const server = require('../server');




describe('router.js', () => {
    describe('GET / endpoint', () => {
      it('should respond with status code 200 OK', async () => {
        let response = await request(server).get('/api/daBears/');
  
        expect(response.status).toBe(200);
      });
  
      it('should respond with JSON', async () => {
        let response = await request(server).get('/api/daBears/');
  
        expect(response.type).toMatch(/json/i);
      });
  
    //   it('should send back an object with an api key', async () => {
    //     const expected = { api: 'up' };
  
    //     let response = await request(server).get('expect(response.type).toMatch(/json/i);/');
  
    //     expect(response.body).toEqual(expected);
    //   });
    });

    describe('GET / endpoint', () => {
        it('should respond with status code 200 OK', async () => {
          let response = await request(server).get('/api/daBears/1');
    
          expect(response.status).toBe(200);
        });
    
        it('should respond with JSON', async () => {
          let response = await request(server).get('/api/daBears/1');
    
          expect(response.type).toMatch(/json/i);
        });
    
        // it('should send back an object with an api key', async () => {
        //   const expected = { api: 'up' };
    
        //   let response = await request(server).get('expect(response.type).toMatch(/json/i);/');
    
        //   expect(response.body).toEqual(expected);
        // });
      });



describe('POST /api/daBears endpoint', () => {
    it('should add the person', async () => {
      const body = { name: 'MoreMax MaxMoreMax' };

    //   let response = await request(server)
    //     .post('/api/daBears/')
    //     .send(body);
    //   expect(response.status).toEqual(201);

      let response = await request(server)
        .post('/api/daBears/')
        .send(body);
    //   expect(response.body).toEqual(typeof 37);
      expect(response.type).toMatch(/json/i);
      expect(resource.name).toBe('MoreMax MaxMoreMax');
    });

    it('should return 500 if wrong info input', async () => {
      let response = await request(server)
        .post('/api/daBears/')
        .send({ first: 'frodo' });
      expect(response.status).toBe(500);

      response = await request(server)
        .post('/api/daBears/')
        .send({ lastName: 'baggins' });
      expect(response.status).toBe(500);
    });
  });

  describe('Delete/ enpoint', () => {
      it('should respond with status code 200 accepted,', async () => {
        let response = await request(server)
            .delete('/api/daBears/10')
            expect(response.status).toBe(200);

        response = await request(server)
            .delete('/api/daBears/10')
            expect(response.id === 10).toBeFalsy

            response = await request(server)
            .delete('/api/daBears/10')
            expect(response.body === 1).toBeTruthy


      });
  });
});
