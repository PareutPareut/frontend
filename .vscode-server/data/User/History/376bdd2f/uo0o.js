const fe = require('fs').promise;

fs.readFile('./readme.txt)
.then((data)=>{
        console.log(data.toString());
})
.catch((err)=>{
        console.error(err);
});
