const express = require('express')
const cookieParser = require('cppkie-parser')

const app = express()
app.use(cookieParser)

app.get('/', ()=>{
    console.log('Cookies: ',req.cookies)
    console.log('Signed Cookies:', req.)
})
