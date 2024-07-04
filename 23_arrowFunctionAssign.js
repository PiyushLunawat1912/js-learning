console.log(`===================1===================`);
const Arrow = () => {
 console.log(`Good Morning, Today is Friday`);
}
Arrow();

console.log(`===================2.a===================`);

let multiply = (n1, n2, n3=1) => {
    const result =n1*n2*n3;
    console.log(`The Multiplication of 3 No is:  ${result}`);
}
multiply(5, 5, 2);
console.log(`===================2.b===================`);
multiply(10, 4);


console.log(`===================3.a===================`);
let add = (n1, n2,n3,n4,n5) => {
    const result =n1+n2+n3+n4+n5;
    return result;
}
const value = add(100, 100, 200, 349, 756);
console.log(`The Addition of the 5 No is: ${value}`);

console.log(`===================3.c===================`);

const result = add( "I am", " learning", " ES6", ' features',"in depth");
console.log(`The Addition of the 5 No is: ${result}`);