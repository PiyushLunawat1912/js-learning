// console.log(`================================ 1st ================================`);

// const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
// console.log(fruits_seasonal);
// console.log(fruits_seasonal.length);

// const firstElement = fruits_seasonal[0];
// console.log(`First Element is: ${firstElement}`);

// const len = fruits_seasonal.length
// console.log(`Last Element is: ${fruits_seasonal[len-1]}`);

// console.log(`================================ 2nd ================================`);


// const fruits_seasonal1 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
// console.log(`Original Array: ${fruits_seasonal1}`);
// fruits_seasonal1.unshift("Papaya"); 
// console.log(`After unshift (): ${fruits_seasonal1}`); 

// console.log(`================================ 3rd ================================`);


// const fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
// console.log(`Original Array: ${fruits_seasonal1}`);
// fruits_seasonal1.push("Pineapple"); 
// console.log(`After push (): ${fruits_seasonal1}`); 


const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`================================ first and last element  ================================`);

console.log("First element:", fruits_seasonal[0]);
console.log("Last element:", fruits_seasonal[fruits_seasonal.length - 1]);

console.log(`================================ Add element → Papaya before the element 'Banana'  ================================`);


fruits_seasonal.splice(0, 0, "Papaya");
console.log("Array after adding Papaya:", fruits_seasonal);


console.log(`================================ Remove 'Mango' from the array ================================`);

fruits_seasonal.splice(fruits_seasonal.indexOf("Mango"), 1);
console.log("Array after removing Mango:", fruits_seasonal);

console.log(`================================ Add element 'Pineapple' at the last position ================================`);

fruits_seasonal.push("Pineapple");
console.log("Array after adding Pineapple:", fruits_seasonal);

console.log(`================================ Add element 'Dragon Fruit' before "Water Melon" ================================`);


fruits_seasonal.splice(fruits_seasonal.indexOf("Water Melon"), 0, "Dragon Fruit");
console.log("Array after inserting Dragon Fruit:", fruits_seasonal);

console.log(`================================ Replace an element 'Orange' with 'Kiwi'================================`);


fruits_seasonal[fruits_seasonal.indexOf("Orange")] = "Kiwi";
console.log("Array after replacing Orange with Kiwi:", fruits_seasonal);


console.log(`================================  Log the elements starting from index 1 to 4 ================================`);

console.log("Elements from index 1 to 4:", fruits_seasonal.slice(1, 5));


console.log(`================================  select last 3 element  ================================`);


console.log("Last 3 elements:", fruits_seasonal.slice(-3));
