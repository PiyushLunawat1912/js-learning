

// var word = "Software";
// var word = "UI Developer";
// var result="";

// for (let i = word.length - 1; i >=0; i--) {
//      var ch = word.charAt(i);
//      result =result +ch;
    
// }
// console.log(result);


// function reverseString(word) {
//     let result = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//         var ch = word.charAt(i);
//         result = result + ch;
//     }
//     return result;
// }

// // Strings to reverse
// const strings = [
//     "Software",
//     "UI Developer",
//     // "Web Developer",
//     // "Billion Dollar",
//     // "Java"
// ];

// // Reverse each string using the method
// strings.forEach(word => {
//     console.log(`Original String is: ${word}, Reversed String is: ${reverseString(word)}`);
// });


// // Function to reverse a string without using predefined methods
// function reverseStringManual(words) {
//     let result = "";
//     for (let i = words.length - 1; i >= 0; i--) {
//         var ch = words.charAt(i);
//         result = result + ch;
//     }
//     return result;
// }

// console.log(`======================Reverse the string without using predefined methods.======================`);
// const string = [
//     "Web Developer",
//     "Billion Dollar",
//     "Java"
// ];

// // Reverse each string using the manual method
// strings.forEach(words => {
//     console.log(`Original String is: ${words}, Reversed String is: ${reverseStringManual(words)}`);
// });



console.log(`======================Reverse the string using any existing methods that you know======================`);
function reverseString(word) {
    let result = "";
    for (let i = word.length - 1; i >= 0; i--) {
        var ch = word.charAt(i);
        result = result + ch;
    }
    return result;
}


const stringsPredefined = [
    "Software",
    "UI Developer"
];

stringsPredefined.forEach(word => {
    console.log(`Original String is: ${word}, Reversed String is: ${reverseString(word)}`);
});

console.log(`======================Reverse the string without using predefined methods.======================`);


function reverseStringManual(words) {
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        var ch = words.charAt(i);
        result = result + ch;
    }
    return result;
}


const stringsManual = [
    "Web Developer",
    "Billion Dollar",
    "Java"
];


stringsManual.forEach(words => {
    console.log(`Original String is: ${words}, Reversed String is: ${reverseStringManual(words)}`);
});
