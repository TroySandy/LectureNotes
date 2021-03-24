/*
-Array destructiong allows you to unpack values from arrays, or even properties from objects, into distinct variables.

-Destructering uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sources variable. 

-Great for pulling info out of an array/object and assigning that data to its own variable. 
*/

const fullName = ["Troy", "Sandy", "Mr", {
    month: 2,
    date: 25,
    year: 1988
}];
// const firstName = fullName[0];
// const lastName = fullName[1];

const [firstName, lastName, ...otherInfo] = fullName; //rest (spread) operator has to be the last one put in.
console.log(firstName, lastName);
console.log(fullName);
console.log(...otherInfo);