const app = require('../src/app');

const expect = require('chai').expect;

const request = require('supertest');

const {knex} = require('../src/models/datasources/objection');

describe('Auth Login', () => {

    before(async () => {

        await knex.migrate.rollback();
        await knex.migrate.latest();
        await knex.seed.run();

    });

    it('should log me in', async () => {

        const response = await request(app)
            .post('/login')
            .send({
                email: 'admin_one@mail.fr',
                password: '123123',
            });

        let data = response.body;

        expect(response.statusCode).to.equal(200);

        // TODO I EXPECT A TOKEN ( object )

        expect(data.status).to.be.true;

    });

    it('should not log me in', async () => {

        const response = await request(app)
            .post('/login')
            .send({
                email: 'admin_one@mail.fr',
                password: '321321',
            });

        expect(response.statusCode).to.equal(200);

        let data = response.body;

        expect(data.status).to.be.false;

    });


});