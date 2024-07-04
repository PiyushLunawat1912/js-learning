console.log(`===============================================Task 1===============================================`)



var greaterNum = function(argOne, argTwo) 
{
    var result = argOne > argTwo ? argOne : argTwo;
    console.log(`Greater number between are ${argOne}, ${argTwo} is: ${result}`);
}


greaterNum(10, -10);
greaterNum(800, 899);



console.log(`===============================================Task 2===============================================`)


function isEvenOrOddNum(argOne){
    var result = argOne%2 ==0? true:false;
    return result;
}
var returnValue = isEvenOrOddNum(29)
console.log(`Given number 29 is even: ${returnValue}`)
var returnValue = isEvenOrOddNum(44)
console.log(`Given number 44 is even: ${returnValue}`)
var returnValue = isEvenOrOddNum(0)
console.log(`Given number 0 is even: ${returnValue}`)
var returnValue = isEvenOrOddNum(101)
console.log(`Given number 101 is even: ${returnValue}`)




console.log(`===============================================Task 3===============================================`)
function wordLength(argOne){
    
    var result = argOne.length%2 ==0? true:false;
    return result;
}
var returnValue = wordLength("JavaScript")
console.log(`Given string "JavaScript"  is even length: ${returnValue}`)


function wordLength(argOne) {
    var result = argOne.length % 2 === 0 ? true : false;
    return result;
}

var returnValue = wordLength("Google Chrome");
console.log(`Given string "Google Chrome" has an even length: ${returnValue}`);


function wordLength(argOne) {
    var result = argOne.length % 2 === 0 ? true : false;
    return result;
}

var returnValue = wordLength("DeveloperSmart");
console.log(`Given string "Developer Smart" has an even length: ${returnValue}`);

console.log(`--------------------------------------------------------------------------------------------------`);