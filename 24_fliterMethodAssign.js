const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`1. Find out all the numbers which are greater than 50 and log on console`)

const newArray = arrayNumbers.filter(number => number > 50);

console.log(newArray);


console.log(`-------------------------------------------------------------------`);
console.log(`2. Find out all the even number and log on console`);
const evenNumbers = arrayNumbers.filter(number => number % 2 === 0);

console.log("Even numbers:", evenNumbers);



console.log(`-------------------------------------------------------------------`);
console.log(`3. Find out all the odd numbers and log on console`);
const oddNumbers = arrayNumbers.filter(number => number % 2 !== 0);

console.log("Odd numbers:", oddNumbers);
console.log(`-------------------------------------------------------------------`);
console.log(`4. Find out all the numbers which are multiple of 5`);

const multiplesOf5 = arrayNumbers.filter(number => number % 5 === 0);

console.log("Multiples of 5:", multiplesOf5);
console.log(`-------------------------------------------------------------------`);

console.log(`5. Find out all numbers which are between 20 and 50`);

const numbersBetween20And50 = arrayNumbers.filter(number => number >= 20 && number <= 50);

console.log("Numbers between 20 and 50:", numbersBetween20And50);

