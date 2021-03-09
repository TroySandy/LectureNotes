/*
-Properties are qualities associated with a data type
-Strings only have one singular property for us to access, that being the length property
*/

let myName = "Troy Sandy";
console.log(myName.length);
// console.log displays 10, it couts the spaces

/* 
-Methods are tools than can help us manipulate data
-.property vs .method()
-Methods are functions associated with data types
*/

let myNameIs = "Troy";
console.log(myNameIs.toUpperCase());
console.log(myNameIs.toLowerCase());

let home = "My home is in Lafayette";
console.log(home.includes("Lafayette"));
console.log(home.length);

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string
let sent = 'This sentence will be split into individual parts';
let sentArray = sent.split(" ");
console.log(sentArray);
// DRY method...
console.log(sent.split(" "));

