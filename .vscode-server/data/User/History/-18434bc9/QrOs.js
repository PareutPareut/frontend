const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) { 
  res.send('Hello World')
})
//app.get : http메소드(요청의 목적, 종류를 알리는 수단)-요청 방식1.get요청 : 주소창에서 데이터 전달 , 2.post방식: 주소창x, 바디에 주소를 담아
//'/' :  function

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})