const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`1. Log the array element with it's index using forEach) with arrow function`);
arrayNumbers.forEach( (currentValue, index, array) =>{
    console.log(currentValue, index, array);
  
});


console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`2. Find the positive numbers and log on console`);
console.log(`a. Using forEach) with arrow function`);


arrayNumbers.forEach((value)=>{
    if (value>=0) {
       console.log(value);        
    }
});
console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`3. Find the negative numbers, add into new array and and log new array on console using arrow function`);

arrayNumbers.forEach((value)=>{
    if (value<=0) {
       console.log(value);        
    }
});

console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`4. Find the even numbers and log on console using forEach) with arrow function
`);
arrayNumbers.forEach((value)=>{
    if (value%2==0) {
       console.log(value);        
    }
});
console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`5. Find the sum of all elements from arrayNumbers and log sum value on console.
`);

let sum = 0;
arrayNumbers.forEach((element)=>{
   sum = sum + element
});
console.log(sum);

console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`6. Log the only even indexed array value on console. forEach) with arrow function prefered`);
arrayNumbers.forEach(( value,index)=>{
    if (index%2==0) {
       console.log(value);        
    }
});




