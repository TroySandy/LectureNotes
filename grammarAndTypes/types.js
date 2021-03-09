// ********
// Types
// ********
// MAKE SURE TO VIEW IN CONSOLE!!!!!!!
/*
Booleans

- Are ONLY True/False values
- Booleans are like light switches
*/
//Returns True
let on = true;
console.log(on);
//Returns False
let off = false;
console.log(off);

/*
Null
- Null is like an empty buvket, it has the capacity to be filled, but it currently is not. 
*/

let emptyBucket = null;
//emptyBucket = "water"
console.log(emptyBucket);

/*
 UNDEFINED
 - Currently has no value assigned
 - Acts as the means (plastic/metal) to create the bucket
 */

let metal; // correct way to assign undefined
//variable
//let metal = undefined // wrong way, it is redunant
// to initialize if it is not defined

console.log(metal);

// NULL vs. UNDEFINED
//******************
// - Null is like an empty bucket, the bucket is there, but there is nothing in it
// - UNDEFINED is like the materials we will use to create the bucket

/*
  We can also think of these two variables as pizza boxes
  - null is like the empty pizza box, just waiting for a pizza
  - undefined is like the cardboard used to make the box
  */

let emptyBox = null;
let unassembledBox;
console.log(unassembledBox);
console.log(emptyBox);

/* 
  NUMBERS
  - In JavaScript, numbers are litteraly just numbers
  - You can add, subtract, multiply, divide
  - You can use decimals
  */

let degrees = 90;
console.log(degrees);
// only shows the first 15 digits entered in the code
let precise = 999999999999999;
console.log(precise);
// will round after 15 digits
let rounded = 9999999999999999;
console.log(rounded);

// will console.log as 0.30000000000000004
let notQuite = 0.2 + 0.1;
console.log(notQuite);

// Function to convert a string to numbers IF that string is a number
// (eg. data received from a server as a sstring but is actually a number)
let a = Number("123");
console.log(a);

/*
STRINGS
- A String is any value inbetween a set of quotes or back ticks
- A string can be noted by ' ' , " ", ``
- 'string' === "string" === `string`
*/

let stringOne = "double quotes";
let stringTwo = "single quotes";
console.log(stringOne, stringTwo);

//Numbers vs Strings
// Adding Numbers
let addition = 1050 + 100;
console.log(addition);
// Adding Strings
let conatenation = "oneThousandFifty" + "100";
console.log(conatenation);

// To check the data type of a variable
//Number
console.log(typeof addition);
//String
console.log(typeof conatenation);
//Function
console.log(typeof console.log);

/*
OBJECTS
- Can be denoted by {}
- Objects store 2 things, a key and a value
- We can access these values by digging into the object with dot notation - object.value
*/

// Say we want to create an app like spotify
// We want to take in an artists name, the amount of albums they have produced, and living band members

let artist = {
  // key   // value
  name: "Queen",
  albums: 15,
  allMembersAlive: false,
};

console.log(artist);
//Example of dot notation
console.log(artist.name);
console.log(typeof artist);
console.log(typeof artist.name);

// how to change an object's value
artist.songName = "Bohemian Rhapsody";
console.log(artist);

/* 
ARRAYS

let list = [ 'item1' , 'item2' , 'item3' ]
               (0)       (1)       (2)

- Denoted by []
- Numbered starting at 0
- You can access a value by digging into the array with array[0], array[1]...
*/

let burritos = ["large", 4, true];

console.log(burritos);
// console.log() as an object BECAUSE the numbers associated with the array are 'keys'
console.log(typeof burritos);

/* 
Addition Vs Concantenation
-Addition is adding numbers together
-Concantenation is adding strings together
*/

let add = 100 + 100;
console.log(add);

let concat = "Troy " + "Sandy";
console.log(concat);

let stillConcat = "1050" + 100 + 200;
console.log(stillConcat);

// JavaScript Challenge Addition vs Interpolation

let firstName = "Troy";
let lastName = "Sandy";
let houseNumber = "730";
let aptNumber;
let street = "Cherokee Ave";
let city = "Lafayette";
let state = "IN";
let zipcode = "47905";
let comma = ",";

console.log(
  firstName,
  lastName + comma,
  houseNumber,
  street,
  city + comma,
  state,
  zipcode
);

function myInfo(
  firstName,
  lastName,
  houseNumber,
  street,
  city,
  state,
  zipcode
) {
  return `My name is ${firstName} ${lastName}.  I Live at ${houseNumber} ${street} in ${city}, ${state} ${zipcode}.`;
}

console.log(
  myInfo("Troy", "Sandy", 730, "Cherokee Ave", "Lafayette", "IN", 47905)
);

let info = {
  firstName: "Troy",
  lastName: "Sandy",
  houseNumber: 730,
  street: "Cherokee Ave",
};

console.log(info.firstName, lastName + ", " + houseNumber, street);
