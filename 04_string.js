
var greet = "Good Morning"

console.log(`Find Total Number of Characters From The String: ${greet} `);
var totalChar = greet.length;
console.log(`Total Char is: ${totalChar}`);

//Methods 
console.log(`=============== charAt()====================`)
var char = greet.charAt(3);
console.log(`Char at index 3 is:${char}`)


console.log(`=============== IndexOf()====================`)
 var chara = greet.indexOf("M");
 console.log(`Index  Of Char  M is:${chara}`)


 console.log(`=============== Concat()====================`)
var firstName ="Piyush";
var lastName ="Lunawat";

 var result = firstName.concat(lastName);
 console.log(`Concated String is ${result}`)

 console.log(`=============== toUppercase()====================`)

 var lastName = "Lunawat";
var res= lastName.toUpperCase();
console.log(`Last Name in Upper Case is ${res}`)

console.log(`=============== Replace()====================`)

var greet = "Good Morning";
var resu = greet.replace("Morning", "Afternoon");
console.log(`After replace:  ${resu}`);

console.log(`=============== Trim()=================`)

var city = "  Pune   ";
console.log(`Length before trim is: ${city.length}`);
city = city.trim();
console.log(`Length after trim is: ${city.length}`);

console.log(`=============== Inculdes()=================`)

var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is "nin" includes: ${result}`);

var result = greet.includes("z");
console.log(`Is "z" includes: ${result}`);


console.log(`=============== Split()=================`)
var word = "My Life ,My Rule";
var result = word.split(" ")
console.log(result);
console.log(` Total number of words: ${result.length}`);


var myName = "Piyush Lunawat";
var result = myName.split(" ");
console.log(result);


