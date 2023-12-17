const express = require('express');

const app =express();

let port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send(res.ip);
})

app.listen(port, ()=>{
    console.log(`server is running at {port}!`);
})