/*const http = require('http');

const server = http.createServer();*/

require('http').createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html ;charset= utf-8'})
    res.end('<h1>web server 생성+실행</h1>')
}).listen(8080, ()=>{
    console.log("8080포트로 웹 서버를 실행")
})

/*server.on('request', function(code){
    console.log('Request Event');
})*/

/*server.on('connection',(code)=>{
    console.log('Connection Event');
})

server.listen(3001, function(){
    console.log('웹서버를 3001포트로 실행합니다.');
}) */

//server객체의 매서드 > listen(port, callback), close(callback):서버 종료