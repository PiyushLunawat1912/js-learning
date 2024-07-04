

// var num = 11;
// console.log(`Before if block `);
// if (num % 2 ==0 )
//      {
//     console.log("Even no ");
    
// }
// console.log(`After if block `);

// function isEven(num){
//     console.log(`Before if block `);
// if (num % 2 ==0 )
//      {
//     console.log("Even no ");
    
// }
// console.log(`After if block `);

// }
// isEven(10);
// isEven(9);
// isEven(1017);
var  isEvenOrOdd =  function(num){
    if (num %2 == 0) {
        return("Even")
    } else {
        return("ODD")
    }
}
var value = isEvenOrOdd(3);
console.log(`Given number 3 is ${value}`);


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

