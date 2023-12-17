//https://kwanghyuk.tistory.com/90
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

//세션은 기본적으로 쿠키를 사

app.get('/logout',(req,res)=>{
    res.clearCookie(key)
})