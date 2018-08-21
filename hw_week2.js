const express = require('express');
const mw = require('morgan');
const app = express();

app.get('/hihi/:num',function(req, res){
    res.send('abc='+req.params.num);
//localhost:8080/hihi/1234567890 입력하면 abc=1234567890나옴
})

app.get("/hihi", function(req, res) {
    const query = req.query;
    if (query.abc) {
        res.send('abc='+query.abc);
    } else {
        res.send('intro');
    }
})
/*
app.get('/hihi/:abc?',function(req, res){
    res.send('abc='+req.query.abc);
//localhost:8080/hihi?abc=1234567890 입력하면 abc=1234567890나옴
})

app.get('/hihi',function(req, res){
    // TO-DO: 기능이 동작 하지 않아서 수정 필요.
    res.send('intro');
})
*/

app.get('/hello',function(req, res){
    res.send('Hello World!');
})

module.exports = app; //변수 할당