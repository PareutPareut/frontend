const {odd, even } = require('./var.js')

function checkOddOrEven(num){
    if (num%2){ //홀수이면
    return odd;
}
return even;
}

module.exports = checkOddOrEven;