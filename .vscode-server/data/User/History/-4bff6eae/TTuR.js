const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser)

app.get('/', ()=>{
    console.log('Cookies: ',req.cookies)
    console.log('Signed Cookies:', req.signedCookies)
})

app.listen(8080);

//단순히 미들웨어로 등록만 해놓으면 req.cookies에 쿠키 값들이 저장됨
//요청(쿠키 존재x)->응답 : 쿠키
//요청(쿠키존재)->응답 : 