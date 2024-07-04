const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];

console.log(`1. Add 10 into each element and log new array result on console`);

const newArray = arrayNumbers.map( (element)=>{
    return element + 10;
});
console.log(newArray);

console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`2. Cube the each array element and log on console`);
const newArr = arrayNumbers.map( (element)=>{
    return element * element * element;
});
console.log(newArr);

console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`Add the index value into its corresponding each array element and log new array result on console`);
const newArra = arrayNumbers.map((value, index) => value + index);

console.log(newArray);
