const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) { 
  res.send('Hello World')
})
//app.get : http메소드(요청의 목적, 종류를 알리는 수단)-요청 방식1.get요청: 주소창에서 데이터 전달, 2.post방식: 주소창x,내부적으로 정보를
//'/' :라우팅(특정 포트를 들어가더라도 포트 안에서도 다양한 파일이 존재)
//function (){} : 콜백함수(앞의 함수가 끝나고 실행할 함수)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})