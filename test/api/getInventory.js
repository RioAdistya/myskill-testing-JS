const request = require('supertest');

describe('Get Request example', () => {
  it('Find Pets by Status', async () => {
    const response = request('https://petstore.swagger.io/v2').get(
      '/store/inventory'
    );
    console.log((await response).status);
    console.log((await response).body);
  });
});

describe('Get Request example', () => {
  it('login', async () => {
    const response = request('https://petstore.swagger.io/v2')
      .get('/user/login')
      .send({ username: 'username0', password: 'password4' });
    console.log((await response).status);
    console.log((await response).body);
  });
});

describe('Get Request example', () => {
  it('login', async () => {
    const response = request('https://petstore.swagger.io/v2')
      .delete('/user/rioadistya')
      .send({ username: 'rioadistya' });
    console.log((await response).status);
    console.log((await response).body);
  });
});
