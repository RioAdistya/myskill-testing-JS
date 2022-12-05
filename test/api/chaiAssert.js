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
    // expect((await response).body).to.haveOwnProperty(`totvs`);
    // expect((await response).body).to.haveOwnProperty(`sold`);
    // expect((await response).body).to.haveOwnProperty(`Sold`);
    // expect((await response).body).to.haveOwnProperty(`placed`);
    // expect((await response).body).to.haveOwnProperty(`string`);
    expect((await response).body).to.haveOwnProperty(`unavailable`);
    expect((await response).body).to.haveOwnProperty(`pending`);
    expect((await response).body).to.haveOwnProperty(`available`);
    // expect((await response).body).to.haveOwnProperty(`peric`);
    // expect((await response).body).to.haveOwnProperty(`totvs1`);
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
