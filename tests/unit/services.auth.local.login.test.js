const expect = require('chai').expect;

const loginLocal = require('../../src/services/auth/login');

const jwtHelper = require('../../src/helpers/jwt');


describe('Service Auth Local', function () {

    before(function () {

        this.good_user = {
            'email': 'admin_one@mail.fr',
            'password': '123123'
        };

        this.bad_password_user = {
            'email': 'admin_one@mail.fr',
            'password': '321321'
        };

        this.non_existant_user = {
            'email': 'admin_one@mail.fr',
            'password': '321321'
        };

    });

    describe('#login()', function () {

        it('should return a valid token with good credentials', async function () {

            let {email, password} = this.good_user;

            let result = await loginLocal(email, password);

            expect(result).to.be.a('string');

            expect(jwtHelper.verify(result)).to.not.be.false;

        });

        it('should return message with bad credentials', async function () {

            let {email, password} = this.bad_password_user;

            let result = await loginLocal(email, password);

            expect(result).to.be.an.instanceOf(Error);

            expect(result).to.be.an('Error', 'BAD_PASSWORD');

        });

        it('should return message with not existent credentials', async function () {

            let {email, password} = this.non_existant_user;

            let result = await loginLocal(email, password);

            expect(result).to.be.an.instanceOf(Error);

            expect(result).to.be.an('Error', 'BAD_CREDENTIALS');

        });

    });

});