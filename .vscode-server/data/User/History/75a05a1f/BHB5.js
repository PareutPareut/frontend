const express = require('express');

const app =express();

app.get('/', (req,res)=>{
    res.send(res.ip);
})

app.listen(port, ()=>{
    console.log(`server is running at {port}!`);
})