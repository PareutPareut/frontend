const http = require('http');

const server = http.createServer();

server.listen(3001, function(){
    console.log('서버가 실행되었습니다.')
})