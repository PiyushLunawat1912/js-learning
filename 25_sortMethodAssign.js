
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
arrayRollNumbers.reverse();
console.log(`===============================REVERSE ARRAY===============================`);
console.log(arrayRollNumbers);
console.log(`===============================SORT ARRAY===============================`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`===============================SORT ASCENDING ARRAY===============================`);
arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2 ? 1:-1;

});
console.log(arrayRollNumbers);

console.log(`===============================Greatest number in the array===============================`);
let greatestNumber = arrayRollNumbers[0];
for (let i = 1; i < arrayRollNumbers.length; i++) {
    if (arrayRollNumbers[i] > greatestNumber) {
        greatestNumber = arrayRollNumbers[i];
    }
}
console.log("Greatest number in the array:", greatestNumber);

console.log(`===============================Smallest number in the array===============================`);
// 5. Find the smallest number from the array using a for loop
let smallestNumber = arrayRollNumbers[0];
for (let i = 1; i < arrayRollNumbers.length; i++) {
    if (arrayRollNumbers[i] < smallestNumber) {
        smallestNumber = arrayRollNumbers[i];
    }
}
console.log("Smallest number in the array:", smallestNumber);

console.log(`===============================Remove duplicates from array===============================`);


const uniqueArray = arrayRollNumbers.filter((item, index) => arrayRollNumbers.indexOf(item) === index);
console.log("Array with duplicates removed:", uniqueArray);