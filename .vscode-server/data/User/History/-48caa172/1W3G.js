const http = require('http');
const fs = require('fs');

const server = createServer((req,res)=>{
    res.writeHead(200,'Content Type'='text/html charset=utf-8')
    res.write('fs module을 이용해여 html 불러오기')
    res.end("성공")
})

server.listening(8080,function(){
    console.log('8080포트로 서버에 연결');
})