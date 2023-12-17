const express = require('express');
const path = require('path');
const morgan = require('morgan'); // 미들웨어 연결

const app = express();

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV ==='production'){
    app.use(morgan('conbined')); //배포환경 : 가장 많은 정보 제공
}else{
    app.use(morgan('dev')); //개발환경
}

app.get('/', (req,res)=>{
    res.send('hello hello');
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),)
})