const express= require('express')
const cookieParser = require('cookie-parser')

const app =express()
app.use(cookieParser)

app.get('/login',(req,res)=>{
    res.cookie("name","miffy",{signed : true});
    res.redirect('/')
}) //생성

app.get('/',(req,res)=>{
   res.send(req,cookie)
}) //읽기


app.get('/',(req,res)=>{
   res.cookie(signed, false)
}) 

app.get('/',(req,res))