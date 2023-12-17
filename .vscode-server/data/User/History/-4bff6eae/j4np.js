const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser)

//여기까지 수행하면 App안의 req, res부분에서 사용할 수 있다

app.get('/', (req,res)=>{
    res.cookie(key, value, {option});
    res.redirect('/') 
}) //쿠키 생성
/* option :
- maxAge : 현재 시간으로부터 만료 시간을 밀리초 단위로 설정
- expires : cookie의 만료날짜를 GMT시간으로 설정
- path : cookie의 경로, default는 "/"
- domain : cookie의 domain name, default는 loaded
- secure : https에서만 cookie를 사용할 수 있게 설정
- httpOnly : 웹 서버를 통해서만 cookie에 접근할 수 있도록 설정
- signed : cookie가 서명되어야 할 지를 결정 */

app.listen(8080);

//단순히 미들웨어로 등록만 해놓으면 req.cookies에 쿠키 값들이 저장됨
//요청(쿠키 존재x)->쿠키생성 및 쿠키 값 저장->세션 쿠키와 함께 응답
//요청(쿠키존재)->쿠키값 검색->시용자 식별->응답