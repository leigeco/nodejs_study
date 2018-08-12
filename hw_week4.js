const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

//param
app.get('/hihi/:num', function(req, res){
    res.json(req.params.num);
    //사용법 : localhost:8080/hihi/블라블라
})

//query
app.get('/hihi', function (req, res){
    const query = req.query;
    if (query.abc) {
        res.json(query.abc);
    } else {
        res.json("intro");
    }
    //사용법 : localhost:8080/hihi?abc=블라블라
})

//hello
app.get('/hello', function(req, res) {
    res.json("hello");
    //사용법 : localhost:8080/hello
})

app.listen(8080, function(){
    console.log("Server is running");
})

module.exports = app; //변수 할당