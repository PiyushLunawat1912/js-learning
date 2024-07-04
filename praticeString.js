console.log(`======= Step 1========`);
var string = "Hello World!";
console.log(`Given String Is : ${string}`);

var length = string.length;
console.log(`Total Length Of Given String Is :${length}`);

//  const array = string.split(``);
//  console.log(`Total Character Of Given String Is : ${array}`);

 var string = "JavaScript is the language of Internet";
console.log(`Given String Is : ${string}`);

var length = string.length;
console.log(`Total Length Of Given String Is :${length}`);

//  const array1 = string.split(``);
//  console.log(`Total Character Of Given String Is : ${array1}`);

 console.log(`======= Step 2========`);
 console.log(`=======  Q.1 ========`);
 var string = "Hey, my friend, Programming Language";
 console.log(`Given String Is :${string}`);

 const array2 = string.slice(28,36).charAt(7);
 console.log(`The Last Character Of Given String Is : ${array2}`);

 console.log(`=======  Q.2 ========`);
 var string = "I am learning logical program";
 console.log(`Given String Is : ${string}`);

 const len = string.length;
 console.log(`The Last Character Of Given String Is : ${string[len-1]}`);

 console.log(`=======  Q.3 ========`);
 var string = "Angular";
 console.log(`Given String Is : ${string}`);

 const len1 = string.length;
 console.log(`The Last Character Of Given String Is : ${string[len1-1]}`);

 console.log(`======= Step 3 ========`);
 console.log(`=======  Q.1 ========`);
 var string = "React";
 console.log(`Given String Is : ${string}`);

 const arr = string.charAt(``);
 console.log(`The First Character Of Given String Is : ${arr}`);

 console.log(`=======  Q.2 ========`);
 var string = "Elon Musk";
 console.log(`Given String Is : ${string}`);

 const arr1 = string.charAt(``);
 console.log(`The First Character Of Given String Is : ${arr1}`);

 console.log(`=======  Q.3 ========`);
 var string = "Apple founder is Stew Job";
 console.log(`Given String Is : ${string}`);

 const arr2 = string.charAt(``);
 console.log(`The First Character Of Given String Is : ${arr2}`);

 console.log(`======= Step 4 ========`);

const capitalized = function (sentence) {
   let str = sentence.split(" ");
   for (let index = 0; index < str.length; index++) {
     str[index]=str[index][0].toUpperCase() + str[index].substring(1);
   }
   return str.join(" ");
}
console.log(capitalized("language of internet"));
console.log(capitalized("Elon musk - The tycoon of decade"));
console.log(capitalized("my life my rule"));
console.log(capitalized("logical programming question SET"));

function checkUI(strings) {
  strings.forEach(string => {
      console.log(string.includes('UI'));
  });
}

// List of strings to check
const strings = [
  "React - UI Developer",
  "UI Developer",
  "Front end and backend technologies",
  "MEAN or MERN - UI Developer"
];

// Check each string
checkUI(strings);
console.log(`======= Step 6 ========`);
var str4 = "apple,orange,banana";
const array3 = str4.split(" ");
console.log(array3);

var str4 = "Stew,Bill,Jenny,Elon";
const array4 = str4.split(" ");
console.log(array4);

var str4 = "Rupees,Dollar,Krone,Pound,Dinar";
const array5 = str4.split(" ");
console.log(array5);