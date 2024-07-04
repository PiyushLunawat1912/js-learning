
console.log(`=================================================Task 1=================================================`)
function squareOfWordLength(){
   var result = "JavaScript";
   var lengthOne = result.length;
   var result = lengthOne * lengthOne;
   console.log(`The Length of "JavaScript" is is:${lengthOne}, and its Square is: ${result}`)
  
  

   var result = "Google Chrome";
   var lengthOne = result.length;
   var result = lengthOne * lengthOne;
   console.log(`The Length of "Google Chrome" is is:${lengthOne}, and its Square is: ${result}`)



   var result = "Developer Smart";
   var lengthOne = result.length;
   var result = lengthOne * lengthOne;
   console.log(`The Length of "Developer Smart" is is:${lengthOne}, and its Square is: ${result}`)




}

squareOfWordLength()



console.log(`=================================================Task 2=================================================`)


function  word()
   {
     var str= "I am Angular Developer"
     var  lengthOne = str.length;
     var result= str.split(" ").length;
     var resultdiv =  lengthOne / result ;
     var resultmul =  lengthOne * result ;

   
     console.log(`The Length Of String is:${lengthOne},  Total No of Words are:${result}, and divided by total of word the result is: ${resultdiv}`);
     console.log(`The Length Of String is:${lengthOne},  Total No of Words are:${result}, and Multiplied by total of word the result is: ${resultmul}`);
 }

 word()


 console.log(`---------------------------------------------------------------------------------------------------------`);