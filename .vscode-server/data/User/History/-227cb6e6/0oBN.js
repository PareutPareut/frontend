const express = require('express')

const app = express();

app.set(port, process.env.PORT || 3000);
app.set(req.ip, process.env.IP || 0.0.0.0);

app.get('/', (req,res))