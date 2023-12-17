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
//요청(쿠키 존재x)->쿠키생성 및 쿠키 값 저장->세션 쿠키와 함께 응답
//요청(쿠키존재)->쿠키값 검색->시용자 식별->응답