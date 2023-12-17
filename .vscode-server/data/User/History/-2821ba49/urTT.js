const express= require('express')
const cookieParser = require('cookie-parser')

const app =express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.cookie("name","miffy",{signed : true});
    res.redirect('/')
}) //생성

app.get('/state',(req,res)=>{
   res.send(req.cookie.key)
}) //읽기


app.get('/state',(req,res)=>{
   res.cookie(signed, false)
}) 

app.get('/logout',(req,res)=>{
    res.clearCookie(key)
})