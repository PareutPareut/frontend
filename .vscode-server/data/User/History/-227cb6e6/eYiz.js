const express = require('express')

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('req.ip', process.env.IP || '0.0.0.0' );

app.get('/', (req,res)=>{
    res.send('접속 된 아이피 :', req.ip);
})

app.get('connection', (data)=>{
    console.log('CONNECTION!!!');
})

app.get('request', (data)=>{
    console.log('REQUEST!!!');
})

app.listen('port', ()=>{
    console.log('server is running at 3000!');
})