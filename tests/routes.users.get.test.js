const app = require('../src/app');

const expect = require('chai').expect;

const request = require('supertest');

const {knex} = require('../src/models/datasources/objection');

describe('User Get', () => {

    before(async () => {

        await knex.migrate.rollback();
        await knex.migrate.latest();
        await knex.seed.run();

    });

    it('should return the administrator', async () => {

        const response = await request(app).get('/users/1');

        let data = response.body;

        expect(data).to.be.an('object');

        expect(data.email).to.have.string('admin_one@mail.fr');

    });

});