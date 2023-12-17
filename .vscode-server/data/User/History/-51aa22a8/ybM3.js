const http = require('http');

const server = http.createServer();

server.listen(3001, function(){
    console.log('웹서버를 3001포트로 실행합니다.');
})