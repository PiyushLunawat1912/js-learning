// if(true) {
//     let message = "Hello";
//     const PI = 3.1413;
// };
//     console. log(message); // Not allowed as variable 'message' and 'PI' defined
//     // using let and const keyword hence it has block scope
//     if(true) {
//     var greet = "Good Morning";
//     }
//     console. log (greet); // Allowed as variable 'greet' defined
//     // using var keyword hence it has function scope


if (true) {
    let message = "Hello";
    const PI = 3.1413;
    console.log(message); // "Hello"
    console.log(PI);      // 3.1413
}

// Uncommenting the following lines will throw errors because `message` and `PI` are not defined outside the block
// console.log(message); // Error: message is not defined
// console.log(PI);      // Error: PI is not defined

if (true) {
    var greet = "Good Morning";
}
console.log(greet);