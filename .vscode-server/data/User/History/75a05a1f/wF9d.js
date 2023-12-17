const express = require('express');

const app =express();

let port = process.env.PORT || 3000;
const allowedIp = process.env.CLIENT_IP || '127.0.0.1';

app.get('/', (req,res)=>{
    res.send('req ip : ', allowedIp);
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}!\nip : ${allowedIp}`);
})