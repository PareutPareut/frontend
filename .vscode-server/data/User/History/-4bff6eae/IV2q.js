const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser)

//여기까지 수행하면 App안의 req, res부분에서 사용할 수 있다

app.get('/', (req,res)=>{
    res.cookie(key, value, {option});
    res.redirect('/') 
}) //쿠키 생성

app.listen(8080);

//단순히 미들웨어로 등록만 해놓으면 req.cookies에 쿠키 값들이 저장됨
//요청(쿠키 존재x)->쿠키생성 및 쿠키 값 저장->세션 쿠키와 함께 응답
//요청(쿠키존재)->쿠키값 검색->시용자 식별->응답