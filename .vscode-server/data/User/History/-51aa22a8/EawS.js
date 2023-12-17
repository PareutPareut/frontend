const http = require('http');

const server = http.createServer();

server.on





server.listen(3001, function(){
    console.log('웹서버를 3001포트로 실행합니다.');
}) 

//server객체의 매서드 > listen(port, callback), close(callback):서버 종료