//https://kwanghyuk.tistory.com/90
const express= require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.cookie('name','miffy',{
        signed : true,
        httpOnly : true,
        exprires : new Date(Date.now()+900000)
    })
    res.redirect('/')
})

app.get('/state',(req,res)=>{
    res.send(req.cookie.name) //이름읽기
})

app.get('/state',(req,res)=>{
    res.cookie('name','newMiffy') //업데이트
})

app.get('/logout',(req,res)=>{
    res.clearCookie(cookie)
})