
function stringHandsOn(){
    console.log(`========================Step 1==========================================`)
    var str = "    Hey you are doing good, keep it up    "
    console.log(`Given String is:${str}`)

    console.log(`========================Step 2==========================================`)
    var lengthOne = str.length;
    console.log(`Total length is: ${lengthOne}`)

    console.log(`========================Step 3==========================================`)

    console.log(`Length before trim is: ${str.length}`);
    var resultStr = str.trim();
    var resultlength = resultStr.length; 
    console.log(`Length after trim is: ${resultlength}`);


    
    console.log(`========================Step 4==========================================`)
    var spacesRemoved = lengthOne - resultlength;
    console.log(`Total number of extra spaces removed: ${spacesRemoved}`);

    console.log(`========================Step 5==========================================`)

    var firstChar=resultStr.charAt(0)
    var lastChar = resultStr.charAt(resultlength-1);
    console.log(`First  after trim:${firstChar}, and last character after trim:${lastChar}`)

    console.log(`========================Step 6==========================================`)


    var result= resultStr.split(" ").length;
    console.log(`Total no of words are: ${result}`)

    console.log(`========================Step 7==========================================`)

    var  result= resultStr.indexOf("good")
    console.log(`Index Of Good is:${result}`)

    console.log(`========================Step 8==========================================`)

    var result = resultStr.substring(22);
    console.log(`Substring starting from 22 is :${result}`)

    console.log(`========================Step 9==========================================`)

    var result = resultStr.endsWith("up");
    console.log(`String Ends with is up  :${result}`)


    console.log(`========================Step 10==========================================`)
  
    var result = resultStr.startsWith("Hey");
    console.log(`String Start with is Hey  :${result}`)




     

    
}

stringHandsOn()


