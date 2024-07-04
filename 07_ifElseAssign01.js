console.log(`========================Even OR ODD============================`)

var  isEvenOrOdd =  function(num){
    if (num %2 == 0) {
        return("Even")
    } else {
        return("ODD")
    }
}
var value = isEvenOrOdd(45);
console.log(`Given number 45 is ${value}`);

var value = isEvenOrOdd(70);
console.log(`Given number 70 is ${value}`);

var value = isEvenOrOdd(67);
console.log(`Given number 67 is ${value}`);

var value = isEvenOrOdd(98);
console.log(`Given number 98 is ${value}`);


console.log (`========================Eligible For Vote ============================`)

// var  age =  function(age){
//     if (age >=18 ) {
//        console.log(`You are Eligible for vote ${age} `)
//     } else {
//         console.log(`You are not Eligible for vote ${age} `)
//     }
// }
// var value = age(45);
// console.log(`Given number 3 is ${value}`);

// var value = age(70);
// console.log(`Given number 3 is ${value}`);

// var value = age(67);
// console.log(`Given number 3 is ${value}`);

// var value = age(98);
// console.log(`Given number 3 is ${value}`);

function eligible(age) {
    if (age>=18) {
        console.log(`You are Eligible for vote ${age} `)
        
    } else {
        console.log(`You are not Eligible for vote ${age} `)
    }
    
}
eligible(18);
eligible(20);
eligible(17);
eligible(40);


console.log (`========================Character============================`)


var strLength = function(str){
    if (str.length >=10) {
        console.log(`String Contains 10 and more than 10 Char`)
        
    } else {
        console.log(`String dose not Contains 10 and more than 10 Char`)
    }
}
strLength("JavaScript")

var word = function(word){
    if (word.startsWith("Java")) {
        console.log(`Given String ${word} starts with word Java `)
        
    } else {
        console.log(`Given String ${word} dose not  starts with word Java`)
    }
}
word("JavaScript")
word("Programming")

console.log (`=============================================================================`)