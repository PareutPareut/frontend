const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) { 
  res.send('Hello World')
})

app.get('/dog', function (req, res) { 
    res.send('강아지')
})
app.get('/cat', function (req, res) { 
    res.send('고양이')
})
  
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})