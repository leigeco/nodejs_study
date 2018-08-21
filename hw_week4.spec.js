const should = require('should');
const request = require('supertest');
const app = require('./hw_week2.js');

describe('GET /hihi', ()=> {
    it('reponds with intro', ()=> {
        return request(app)
            .get('/hihi')
            .then(res => {
                 should.equal(res.text,'intro');
            });
    });

    it('/abcde reponds with abc=abcde', ()=> {
        return request(app)
            .get('/hihi/abcde')
            .then(res => {
                 should.equal(res.text,'abc=abcde');
            });
    });

    it('/안녕하세요 reponds with abc=안녕하세요', ()=> {
        return request(app)
            .get(encodeURI('/hihi/안녕하세요'))
            .then(res => {
                 should.equal(res.text,'abc=안녕하세요');
            });
    });

    it('/12#<> reponds with abc=12', ()=> {
        return request(app)
            .get('/hihi/12#<>')
            .then(res => {
                 should.equal(res.text,'abc=12');
            });
    });

    it('/?#?## reponds with abc=?#?##', ()=> {
        return request(app)
            .get('/hihi/?#?##')
            .then(res => {
                 should.equal(res.text,'intro');
            });
    });

    //query

    it('?abc=abcde reponds with abc=abcde', ()=> {
        return request(app)
            .get('/hihi')
            .query('abc=abcde')
            .then(res => {
                 should.equal(res.text,'abc=abcde');
            });
    });

    it('?abc=안녕하세요 reponds with abc=안녕하세요', ()=> {
        return request(app)
            .get('/hihi')
            .query(`abc=${encodeURI('안녕하세요')}`)
            .then(res => {
                 should.equal(res.text,'abc=안녕하세요');
            });
    });

    it('?abc=12#<> reponds with abc=12', ()=> {
        return request(app)
            .get('/hihi')
            .query('abc=12#<>')
            .then(res => {
                 should.equal(res.text,'abc=12');
            });
    });

    it('?abc=?#?## reponds with abc=?', ()=> {
        return request(app)
            .get('/hihi')
            .query('abc=?#?##')
            .then(res => {
                 should.equal(res.text,'abc=?');
            });
    });
});

describe('GET /hello', ()=> {
    it('responds with Hello World!', ()=> {
        return request(app)
            .get('/hello')
            .then(res => {
                should.equal(res.text,'Hello World!');
            });
    });
});