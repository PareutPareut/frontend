const express = require('express');
const app =express();

app.get('/upload', (req,res)=>{
    res.sendFile(path.join(__dirname, 'multipart.html'));
})

