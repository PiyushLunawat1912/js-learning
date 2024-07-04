function isAnagram(str1,str2){
    var a=str1.split("").sort().join("");
    var b=str2.split("").sort().join("");
    console.log(a===b ? "Comparing "+str1 +" with  " + str2 + " which are Anagram " : "Comparing "+ str1 +" with " + str2 + " which are not Anagram"
 
    );
 
 }
 isAnagram("evil","vile");
 isAnagram("silent","listen")
 isAnagram("gram","aram");
 isAnagram("mom","tom")