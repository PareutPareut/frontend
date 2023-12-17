const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    fs.readFile('./server2.html', function(err, data){ //HTML파일을 읽습니다.

        res.writeHead(200,{'Content-Type' : 'text/html charset=utf-8'})
        res.write('fs module을 이용해여 html 불러오기')
        res.end(data)

    })
})

server.on('request', (code)=>{
    console.log('request event!');
})

server.on('connection', (code)=>{
    console.log('connection event!');
})

server.listen(8080,function(){
    console.log('8080포트로 서버에 연결');
})