console.log(`=====================================================Total no of Vowels In the String=====================================================`);


var str = "I am very, good IT  Developer"
var vowels = "aeiou"
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLower = ch.toLowerCase();
    if (vowels.includes(chLower)) { 
       counter ++; 
    }
    
}
console.log(counter);

console.log(`=====================================================Sum Of Cube  from 1 to 5 =====================================================`);



function sumOfCube () {
    var sumOfCube = 0;
for (let i = 1; i <= 5; i++) {
    var cube = i*i*i;
    sumOfCube = sumOfCube + cube;
 }

 console.log(sumOfCube);
    
}
sumOfCube ();


console.log(`=====================================================Odd Position Char =====================================================`);


function oddPositionChars(str) {
    var result="";
    for (let i = 0; i < str.length; i++) {
     var ch = str.charAt(i)
     if (i%2==1 && ch !=' ') {
        //  console.log(ch);
         result =result +ch;
     }
     
    }
    return result;
 }

 var result1 = oddPositionChars("Hard work always pays back")
 console.log(result1);
 var result2 = oddPositionChars("Soon I will be UI IT Champ")
 console.log(result2);
