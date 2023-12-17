const express = require('express')
const parseurl = requir1e('parseurl') //URL을 구문 분석하는 미들웨어
const session = require('express-session')

const express = app()

app.use(session({
    secret : 'my-secret', 
    resave : 'false', //세션 데이터가 바뀌기 전까진 세션 저장소에 값을 저장하지 않는다
    saveUninitialized: true, //세션이 필요하기 
}))