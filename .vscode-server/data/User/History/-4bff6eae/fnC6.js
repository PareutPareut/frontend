const express = require('express')
const cookieParser = require('cppkie-parser')

const app = express()
app.use(cookieParser)

app.get('/', ()=>{
    console.log('Cookies: ',req.cookies)
    console.log('Signed Cookies:', req.signedCookies)
})

app.listen(8080);

//단순히 미들웨어로 등록만 해놓으면 req.cookies에 쿠키 값들이 저장됨
