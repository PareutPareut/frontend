const express = require(express)
const app = express()

app.get('/', function(req, res){
    console.log('server is running!')
})

app.get('/main', function(req, res){
    console.log('sser')
})