const http= require('http');
const fs = require('fs');
const path=require('path');

const parseCookies = (cookie='')=>
cookie.split(';')
    .map(v=>v.split('='))
    .reduce((acc, [k,v])=>{
        acc[k.trim()]=decodeURIComponent(v);
    },{})