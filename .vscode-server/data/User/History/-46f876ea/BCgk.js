const {odd, even} = require('/home/by1094/studyDirectory/command.JS/var.js');
const checkNumber = require('/home/by1094/studyDirectory/command.JS/func.js');

function checkStringOddOrEven(str){
    if (str.length %2){
        return odd;
    }return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

