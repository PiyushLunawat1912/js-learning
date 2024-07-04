// 1. Named function with no argument and no return value
function show() {
    console.log("Hey.. Piyush Lunawat")
}
show();

function square() {
    console.log("Finding the square of 105");
   var result= 105*105;
    console.log("Squar is:",result);
}

square();
console.log("==================SquareNumber=========================");
// 2. Named function with  argument and no return value

function squareNumber(num) {
    console.log("Given number is:",num);
   var result= num*num;
    console.log("Squar is:",result);
}

squareNumber(5);
squareNumber(25);
squareNumber(500);


//WAP with name areaOfREctangle and it's two arguments namely as length and width

function areaOfRectangle(length,width) {
    console.log("Given Length and Width is:",length,width)
    var result=length*width
    console.log("Area of rectangle is:",result)
}
areaOfRectangle(30,30);
areaOfRectangle(30);



// 3. Named function with no argument and  return value

console.log("==================Named function with no argument and  return value=====================================");

function cubeOfNum(num){
    console.log("Given no is:",num);
    var result = num*num*num;
    return result;
}
var cube = cubeOfNum(3);
console.log("Cube is".cube);