const express= require('express')
const cookieParser = require('cookie-parser')

const app =express()
app.use(cookieParser)

app.get('/login',(req,res)=>{
    res.cookie("name","miffy",{signed : true});
})