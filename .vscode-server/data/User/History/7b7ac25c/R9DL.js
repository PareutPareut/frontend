const http = require = require('http');

http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Server</p>');
}).listen(8080, ()=>{ //서버연결
        console.log('8080번 포트에서 서버 대기 중입니다!');
});

const server2 = http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type' : 'text/html ; charset=utf-8'});
        res.write('<h1>Hello Node!2</h1>');
        res.end('<p>hello server2<p>');
});

server2.listen(8081);

server2.on('listening', ()=>{
        consolelog('8081포트에서 서버 대기 중입니다.');
});

server2.on('error', (error)=>{
        console.log(error);
});
