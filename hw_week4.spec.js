const app = require('./hw_week4');
const request = require('supertest');

describe('GET /hihi는', ()=> {
    it('hihi는', (done)=> {
        request(app)
            .get('/hihi')
            .end((err, res) => {
                console.log(res.body);
                done(); //비동기처리
            })
    })
})

describe('GET /hello는', ()=> {
    it('hello는', (done)=> {
        request(app)
            .get('/hello')
            .end((err, res) => {
                console.log(res.body);
                done(); //비동기처리
            })
    })
})