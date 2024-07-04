function spaceCount(str) {
    let count = 0; // Initialize a counter for spaces

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') { // Check if the character is a space
            count++; // Increment the counter if it is a space
        }
    }

    return count; // Return the total count of spaces
}

// Test the function with the given strings
const string1 = "Revision is the mother of success";
const string2 = "JavaScript is the language of internet world";

console.log(` "${string1}" is: ${spaceCount(string1)}`);
console.log(` "${string2}" is: ${spaceCount(string2)}`);
