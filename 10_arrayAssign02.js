console.log(
    ` 1. Find the total elements available or length and log on console`
  );
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(arrayNumbers);



console.log(
  `2. Log the first element and last element in array Numbers and log on console`
);

console.log("First element:", arrayNumbers[0]);
console.log("Last element:", arrayNumbers[arrayNumbers.length - 1]);

console.log(
  `3. Log the third last element using length property and log on console`
);
console.log("Third last element:", arrayNumbers[arrayNumbers.length - 3]);

console.log(`4. Find all even numbers using for of loop and log on console`);
console.log("Even numbers:");
for (const num of arrayNumbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

console.log(`5. Find the odd numbers using for of loop and log on console`);

console.log("Odd numbers:");
for (const num of arrayNumbers) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

console.log(
  `6. Find all the even positioned elements from arrayNumbers, sum it and log on console`
);

let evenPositionedSum = 0;
for (let i = 1; i < arrayNumbers.length; i += 2) {
  evenPositionedSum += arrayNumbers[i];
}
console.log("Sum of even positioned elements:", evenPositionedSum);

console.log(
  `7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`
);
let oddPositionedSum = 0;
for (let i = 0; i < arrayNumbers.length; i += 2) {
  oddPositionedSum += arrayNumbers[i];
}
console.log("Sum of odd positioned elements:", oddPositionedSum);


console.log(
  `8. Find the sum of all elements from arrayNumbers, log on console`
);


const sumOfAllElements = arrayNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all elements:", sumOfAllElements);

console.log(`9. Find the numbers which are multiples of 5`);
console.log("Numbers which are multiples of 5:");
for (const num of arrayNumbers) {
  if (num % 5 === 0) {
    console.log(num);
  }
}

console.log(`10. Is number 115 available in arrayNumbers`);
console.log("Is number 115 available:", arrayNumbers.includes(115));

console.log(`11. Is number 23 available in arrayNumbers?`);
console.log("Is number 23 available:", arrayNumbers.includes(23));

console.log(`12. Insert numbers → 55, 66 at index 3 and log array on console`);
arrayNumbers.splice(3, 0, 55, 66);
console.log("Array after inserting 55 and 66:", arrayNumbers);

console.log(
  `13. Delete 3 elements starting from index 4 and log arrayNumbers on console`
);
arrayNumbers.splice(4, 3);
console.log(
  "Array after deleting 3 elements starting from index 4:",
  arrayNumbers
);
