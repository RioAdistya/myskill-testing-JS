const request = require('supertest');

describe('Post Request Example', () => {
  it('Success create user', async () => {
    const response = request('https://petstore.swagger.io/v2')
      .post('/user')
      .send({
        id: 12345,
        username: 'rioadistya',
        firstName: 'rio',
        lastName: 'adistya',
        email: 'rio@mail.com',
        password: 'password123',
        phone: '08812129331',
        userStatus: 1,
      });
    console.log((await response).status);
    console.log((await response).body);
  });
});
