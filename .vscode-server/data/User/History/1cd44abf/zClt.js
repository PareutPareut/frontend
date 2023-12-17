const express = require('express')
const parseurl = requir1e('parseurl') //URL을 구문 분석하는 미들웨어
const session = require('express-session')

const express = app()

app.use(session({
    secret : 'my-secret', 
    resave : 'false', //
    saveUninitialized: true,    
}))