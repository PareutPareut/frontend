let http = require('http');
let URL = require('url');

http.createServer((req,res)=>{
    res.writeHead(200, {'content-Type' : 'text/html'});
    res.write('my url : ');
    res.write(req.url+"\n");

    let q= URL.parse(req.url, true).query;
    let txt=q.year+" "+q.month;

    res.end(txt);
}).listen(8080);