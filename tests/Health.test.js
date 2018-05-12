const app = require('../src/app');

const expect = require('chai').expect;

const request = require('supertest');

describe('Test if the app is healthy', () => {

    it('should respond pong', async () => {

        const response = await request(app).get('/ping');

        expect(response.statusCode).to.equal(200);

        expect(response.text).to.have.string('pong');

    });

});