// var express = require('express');
// var app = express();
// var morgan = require('morgan');
// var users = [
//     {id: 1, name: 'alice'},
//     {id: 2, name: 'bek'}
// ];

// app.use(morgan('dev'));

// app.get('/users', function(req, res) {
//     req.query.limit = req.query.limit || 10;
//     const limit = parseInt(req.query.limit, 10); 
//     //limit 갯수만큼 잘라서 사용자에게 응답해준다.
//     //문자열을 정수형으로 바꿔주고, 10진수임을 적는다.
//     if (Number.isNaN('limit')) { //값이 정수가 아니라면
//         return res.status(400).end(); //400번 상태를 응답한다. 디폴트는 200.
//     }
//     res.json(users.slice(0, limit)); //첫 인덱스와 마지막 인덱스
// });

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!');
// });

// module.exports = app;


const app = require('./hw_week2.js');

app.listen(8080, function(){
    console.log('Server is running');
})