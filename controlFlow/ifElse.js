let weather = 55;

if (weather < 70) {
  console.log("Wear a Jacket");
} else {
  console.log("No Jacket Needed!");
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

Silver:
    If It is your name, console log 'Hello, my name is <name>'

Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName2 = "Troy";
// Bronze
if ((myName2 = "Troy")) {
  console.log(myName2);
} else {
  console.log("What is your name?");
}

//Silver & Gold
let myName1 = "Bob";

if (myName1 == "Troy") {
  console.log("Hello, My name is " + myName1);
} else {
  console.log(`Hello, is your name ${myName1}?`);
}

/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'

Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase

Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
//Bronze
let name = "zAchARy";
if (name[0] === name[0].toUpperCase()) {
  console.log("zAchARy");
} else {
  console.log("Hey, this isn't spelled correctly!");
}
// Silver
let myName = "zAchARy";
if (myName[0] === myName[0].toUpperCase()) {
  console.log(myName[0]);
} else {
  console.log(myName.substr(1).toLowerCase());
}
//Gold
let theName = "zAchARy";
if (theName[0] === theName[0].toUpperCase()) {
  console.log(theName[0].toUpperCase() + myName.substr(1).toLowerCase());
} else {
  console.log(theName[0].toUpperCase() + myName.substr(1).toLowerCase());
}
//OR this way is simpler
let results = "";
if (theName[0] === theName[0].toUpperCase()) {
  results = theName[0] + theName.substr(1).toLowerCase();
} else {
  results = theName[0].toUpperCase() + theName.substr(1).toLowerCase();
}
console.log(results);

// console.log(results += myName.substr(1).toLowerCase());

//Else If Statements
/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 24;
// or go highest value to lowest value
/*
if (age <= 17) {
    console.log("you are to young")
} else if ( age >= 25 ) {
    console.log("you can rent a car")
} else if ( age >= 21 ) {
    console.log("you can drink")
} else {
    console.log("You can vote")
}
*/

if (age <= 17) {
  console.log("Sorry, you are to young to do anything.");
} else if (age >= 18 && age < 21) {
  console.log("You can vote!");
} else if (age >= 21 && age < 25) {
  console.log("You can Drink!!!");
} else {
  console.log("You can rent a car!");
}
