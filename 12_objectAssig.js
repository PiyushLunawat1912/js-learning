console.log(`==========================Step 1 Create an object with name - professor  Add minimum 5 properties ==========================`);

const professor = {
    name: "Bill Gates ",
    age: 45,
    department: "Computer Science",
    university: "MIT",
    coursesTaught: ["Algorithms", "Data Structures", "Artificial Intelligence"],
    certificates: ['Hacker Rank Participation',
    'Certificate in IFE course', 'Certificate in Adv Programming'
    ],

     degrees: {
        engineering: "CSC",
        phd: "Adv Computing",
        masters: "Software Engineering",
        bachelors: "Computer Science",
        associate: "Information Technology"
    },

}


console.log(professor);

professor.totalExperience = "14 Years",
console.log(professor);

console.log(`========================= . Modify any existing property department==========================`);


//5. Modify any existing property and log object on console
professor.department = "Information Technology";
console.log(professor);

console.log(`========================= Add one new certificate - "Oracle Certified" at the 2nd index of array → certificates==========================`);
//Add one new certificate - "Oracle Certified" at the 2nd index of array → certificates
professor.certificates.splice(1, 0, "Oracle Certified");
console.log(professor);



// Log the last element of the array → certificates.

console.log(professor.certificates);

//Log complete object on console.

console.log(professor)

