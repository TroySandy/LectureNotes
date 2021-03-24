/*  
- Spread operator essentially pulls out all elements of an array and gives them to you as a standalone list of elements.  to feed into a function that only accepts stand alone ojects, function(a,s,d)
- denoted by (...) 
-allows you to copy an array into another array without nesting it.  
*/

// const fullName = ["Troy", "Sandy"];
// console.log(fullName);
// //...fullName
// //const elements = ...fullName; wrong syntax, has to be in []
// // this is what the span element does. => const elements = "Troy", "Sandy"

// const copiedFullName = [...fullName] // correct syntax
// console.log(copiedFullName); 

const prices = [10.99, 5.99, 12.99]
console.log(prices);
console.log(...prices);
console.log(Math.min(prices));
console.log(Math.min(...prices));

// const persons = [{name: "Troy", age: 33}, {name: "Beta", age: 3}]
// console.log(persons);
// console.log(persons[0]);
// const copiedPersons = [...persons];
// console.log(copiedPersons[1]);

// persons.push([{name:"Anna", age: 29}]); //because this happens after the ... it is a copy of before the push happened.  can be a callback reference
// console.log(persons, copiedPersons);

let x = 10; 
let y = "abc";

let a = x; // a does NOT equal x, it equals what the value of what x was above it.  If x changes below this statement, it WILL NOT change a. 
let b = y;

x = 15;
y = "cba"

console.log(x, y, a, b);


let arr = []; //arrays will update when you add to them, the value being called back to is an address of the array as a whole, as it gets updated, the address is the same but the values inside will change
// console.log(arr);
arr.push(1);
// console.log(arr);

let reference = [1, {1:2, 3:4}]
let refCopy = reference;

reference.push(2);
console.log(reference, refCopy);


const persons = [{name: "Troy", age: 33}, {name: "Beta", age: 3}]
// console.log(persons);
// console.log(persons[0]);
const copiedPersons = [...persons]; //makes a NEW copy of the array
// console.log(copiedPersons[1]);
persons.push([{name:"Anna", age: 29}]);

console.log(persons, copiedPersons);

copiedPersons[0].name = "Chris";
persons[0].name = "Bob";

console.log(persons, copiedPersons);// updates the objects inside the array but will NOT add to the array