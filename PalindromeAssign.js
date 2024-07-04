function ispalindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    console.log(`${reverseStr} is a Palindrome`);
    
}
let word = "madam" ;
console.log(`${word} : is a Palindrome`);

let num = "141" ;
console.log(`${num} : is a Palindrome`);

let word1 = "Sunday" ;
console.log(`${word1} : is Not a Palindrome`);

let word2 = "mom" ;
console.log(`${word2} : is a Palindrome`);

let word3 = "listen" ;
console.log(`${word3} : is Not a Palindrome`);

let word4 = "dad" ;
console.log(`${word4} : is a Palindrome`);