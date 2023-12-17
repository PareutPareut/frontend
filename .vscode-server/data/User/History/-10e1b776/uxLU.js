console.log(this)
console.log(this ===module.exports);
console.log(this === exports)

function whatThis(){
    console.log('function', this ===exports, this=== global);
}
whatThis();