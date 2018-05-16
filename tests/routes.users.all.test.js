const app = require('../src/app');

const expect = require('chai').expect;

const request = require('supertest');

const {knex} = require('../src/models/datasources/objection');

describe('User All', () => {

    before(async () => {

        await knex.migrate.rollback();
        await knex.migrate.latest();
        await knex.seed.run();

    });

    it('should return 3 users', async () => {

        const response = await request(app).get('/users');

        let data = response.body;

        expect(data).to.be.an('array');

        expect(data).to.have.lengthOf(3);

    });

});