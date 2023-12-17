const express = require('express')
const app = express()

app.get('/', function(req, res){
    console.log('server is running!')
})

app.get('/main', function(req, res){
    console.log('server is running at /main!')
})

const port = process.env.PORT || 3030

app.listen(port, function(){
    console.log('server is listening at ${port}')
})