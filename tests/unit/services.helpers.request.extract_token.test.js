const assert = require('chai').assert;

const requestHelper = require('../../src/helpers/request');


describe('Service Auth Helper', function () {

    before(function () {

        this.fake_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

        this.req_headers = {
            headers: {
                authorization: `Bearer ${this.fake_token}`
            }
        };

        this.req_query = {
            query: {
                token: this.fake_token
            }
        };

        this.req_nope = {};

        this.req_nope_headers_with_bearer = {
            headers: {
                authorization: 'Bearer'
            }
        };

        this.req_nope_headers_with_bearer_and_space = {
            headers: {
                authorization: 'Bearer '
            }
        };

        this.req_nope_headers_without_bearer = {
            headers: {
                authorization: ''
            }
        };

        this.req_nope_query = {
            query: {
                token: ''
            }
        };


    });

    describe('#extract_token_from_request()', function () {

        it('should return the token from the authorization header', function () {

            let token = requestHelper.extract_token(this.req_headers);

            assert.equal(token, this.fake_token);

        });

        it('should return the token from the query string', function () {

            let token = requestHelper.extract_token(this.req_query);

            assert.equal(token, this.fake_token);

        });

        it('should return false if no token is provided', function () {

            let token = requestHelper.extract_token(this.req_nope);

            assert.isFalse(token);

        });

        it('should return false if the authorization header is empty with bearer', function () {

            let token = requestHelper.extract_token(this.req_nope_headers_with_bearer);

            assert.isFalse(token);

        });

        it('should return false if the authorization header is empty with bearer and space', function () {

            let token = requestHelper.extract_token(this.req_nope_headers_with_bearer_and_space);

            assert.isFalse(token);

        });

        it('should return false if the authorization header is empty without bearer', function () {

            let token = requestHelper.extract_token(this.req_nope_headers_without_bearer);

            assert.isFalse(token);

        });

        it('should return false if the query string is empty', function () {

            let token = requestHelper.extract_token(this.req_nope_query);

            assert.isFalse(token);

        });

    });

})
;