const { expect } = require('chai');
const request = require('supertest');
const DATA = require('../../data/userData');

describe('Chai Assert - Get Example', () => {
  const response = request('https://petstore.swagger.io/v2').get(
    '/store/inventory'
  );
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });
  it('response body to have property', async () => {
    expect((await response).body).to.haveOwnProperty(`unavailable`);
    expect((await response).body).to.haveOwnProperty(`pending`);
    expect((await response).body).to.haveOwnProperty(`available`);
  });
});

describe('Post Request Example', () => {
  const response = request('https://petstore.swagger.io/v2')
    .post('/user')
    .send(DATA.CREATE_USER_DATA);
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});

describe('Post Request Example', () => {
  const response = request('https://petstore.swagger.io/v2')
    .post('/user')
    .send({
      id: 1234,
      username: 'username0',
      firstName: 'user',
      lastName: 'name',
      email: 'user@mail.com',
      password: 'password123',
      phone: '08812129331',
      userStatus: 1,
    });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});

describe('Get login Request Example', () => {
  const response = request('https://petstore.swagger.io/v2')
    .get('/user/login')
    .send({ username: 'rioadistya', password: 'password123' });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});

describe('Get user by username Request', () => {
  const response = request('https://petstore.swagger.io/v2').get(
    '/user/rioadistya'
  );
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`username`);
    expect((await response).body).to.haveOwnProperty(`firstName`);
    expect((await response).body).to.haveOwnProperty(`lastName`);
    expect((await response).body).to.haveOwnProperty(`email`);
    expect((await response).body).to.haveOwnProperty(`password`);
    expect((await response).body).to.haveOwnProperty(`phone`);
    expect((await response).body).to.haveOwnProperty(`userStatus`);
  });
});

describe('Get user by username Not Found Request', () => {
  const response = request('https://petstore.swagger.io/v2').get(
    '/user/username123'
  );
  it('response status equal to 404', async () => {
    expect((await response).status).to.equal(404);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});

describe('Put user Request Example', () => {
  const response = request('https://petstore.swagger.io/v2')
    .put('/user/rioaditya')
    .send({
      id: 12345,
      username: 'rioadistya',
      firstName: 'rio update',
      lastName: 'adistya update',
      email: 'rio@mail.com',
      password: 'password123',
      phone: '08812129331',
      userStatus: 1,
    });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});

describe('Get logout Request Example', () => {
  const response = request('https://petstore.swagger.io/v2').get(
    '/user/logout'
  );
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});

describe('Delete user Request Example', () => {
  const response = request('https://petstore.swagger.io/v2').delete(
    '/user/rioadistya'
  );
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`message`);
  });
});
