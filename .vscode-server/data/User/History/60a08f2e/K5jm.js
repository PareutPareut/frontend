const express = require('express');

const app = express(); //express모듈을 실행해 app변수에 할당
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res)=>{
    res.send('Hello, Express');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
})