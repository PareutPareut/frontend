let http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'content-Type' : 'text/html'});
    res.write('sucess!');
    res.end('hello world!');
}).listen(8080);