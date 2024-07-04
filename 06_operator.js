
console.log(`===============================================Task 1===============================================`)
var greaterNum = function(numOne, numTwo){
    var result = numOne>numTwo ? numOne :numTwo;
    console.log(`Greater number from numbers ${numOne}, ${numTwo} is: ${result}`)

}
greaterNum(20, 10);
greaterNum(70, 10)


// console.log(`========= NaN - Not a Number =======`);
// console.log(0/0);
// console.log(`Undefined and any operator`);
// var num;
// console.log(num * 10);

// console.log(` ======== + Operator ======= `);
// // 1. Addition
// // 2. Concatenation
// // 3. Conversion
// var numOne = "20";
// console.log(`type of: ${typeof numOne} and it's value is ${numOne}`);
// var result = +numOne;
// console.log(`type of: ${typeof result} and it's value is ${result}`);

// var strOne = "JavaScript";
// console.log(`type of: ${typeof strOne} and it's value is ${strOne}`);
// var result = +strOne;
// console.log(`type of: ${typeof result} and it's value is ${result}`);


// function maleMarriageEligibility(gender, age, boyName){
//     var result=  (gender == "Male" && age>=21 ) 
//     ? `Hey ${boyName} you are eligible for Marriage` 
//     : `${boyName}  you are not eligible for Marriage` 
//     return result; 
    
// }
// var message  = maleMarriageEligibility("Male", 25, "Billgates")
// console.log(message)
// var message  = maleMarriageEligibility("Male", 20, "Happy")
// console.log(message)

// function femaleMarriageEligibility(gender, age, boyName){
//     var result=  (gender == "Male" && age>=21 ) 
//     ? `Hey ${boyName} you are eligible for Marriage` 
//     : `${boyName}  you are not eligible for Marriage` 
//     return result; 
    
// }
// var message  = maleMarriageEligibility("Male", 25, "Billgates")
// console.log(message)
// var message  = maleMarriageEligibility("Male", 20, "Happy")
// console.log(message)