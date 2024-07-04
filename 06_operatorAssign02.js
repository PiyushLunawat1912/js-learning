console.log(`===============================================Task 1===============================================`)


function maleMarriageEligibility(gender, age, boyName){
    var result=  (gender == "Male" && age>=21 ) 
    ? `Hey ${boyName} you are eligible for Marriage` 
    : `${boyName}  you are not eligible for Marriage` 
    return result; 
    
}
var message  = maleMarriageEligibility("Male", 25, "Billgates")
console.log(message)
var message  = maleMarriageEligibility("Male", 17, "Stew Jobs")
console.log(message)

console.log(`===============================================Task 2===============================================`)


function femaleMarriageEligibility(gender, age, girlName){
    var result=  (gender == "female" && age>=18) 
    ? `Hey ${girlName} you are eligible for Marriage` 
    :`Hey ${girlName}  you are not eligible for Marriage` 
    return result; 
    
}
var message  = femaleMarriageEligibility("female", 16, "Jenifer")
console.log(message)
var message  = femaleMarriageEligibility("female", 27, "Malinda Gates")
console.log(message)


console.log(`--------------------------------------------------------------------------------------------------`);