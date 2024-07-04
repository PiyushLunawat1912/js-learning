function Player (fullName, totalRuns) {
 this.fullName = fullName;
 this.totalRuns = totalRuns;    
}
const Dhoni = new Player("Ms Dhoni",20000);
const kholi = new Player("Virat Kholi",47000);
const rohit = new Player("Rohit Sharma",30000);
const pant = new Player("Rishab Pant ",10000);

Player.prototype.country = `India`;

console.log(`${Dhoni.fullName},${Dhoni.totalRuns},${Dhoni.country}`);
console.log(`${kholi.fullName},${kholi.totalRuns},${kholi.country}`);
console.log(`${rohit.fullName},${rohit.totalRuns},${rohit.country}`);
console.log(`${pant.fullName},${pant.totalRuns},${pant.country}`);


// const person = {
//     firstName: "Anil",
//     lastName: "Sharma",
//     city: "Mumbai",
// }
// Object.freeze(person);
// person.city = "Pune";
// console.log(person);

// const array = [50, 60, 80, 90];
// Object.freeze(array);
// // array.push(1000);
// // array.pop()
// console.log(array);

const person = {
    firstName: "Anil",
    lastName: "Sharma",
    city: "Mumbai",
}
Object.freeze(person);
person.city = "Pune";
console.log(person);

const array = [50, 60, 80, 90];
Object.freeze(array);
// array.push(1000);
// array.pop()
console.log(array);

const clonedObject = Object.assign({}, person);
console.log(person);
console.log(clonedObject);

const anil = {
    firstName: "Anil",
    lastName: "Sharma",
    city: "Mumbai",
}
const address = {
    street: "Wakad",
    PIN: 411057
}

const mergedObject = Object.assign({}, anil, address);
console.log(mergedObject);