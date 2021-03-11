//Syntax

//declaration     //parameters & fat arrow section
////name       /* parameter 1, parameter2, ect*/       //body of function
let phatArrow = () => console.log("fat arrow");

//calling upon the function
phatArrow();

// Concise Body Arrow Functions...
// - return by default
// - run when called upon (phatArrow())
// - may only be one line long

let fish = (name1, name2) =>
  console.log(`${name1} and ${name2} had fish for lunch today!`);
fish("Bobby", "Jalen");
//thats it! (Calling function must be below the function because it is not hoistable)

// Block body arrow function
// - DO NOT RETURN BY DEFAULT
// - Run when called upon
// - may consist of more than one line, given they are wrapped in {}

let nameGame = (firstName, secondName) => {
  return `My name is ${firstName} ${secondName}.`;
  //can have more lines of code here
};
console.log(nameGame("Troy"));
// leaving one param empty will return an undefined value

// Concise vs Block body functions

// Concise =>
//  -returns implicitly (no return statement needed)
//  - MUST be contained to one line

let apples = (x) => console.log(`There are ${x} apples`);
apples(20);

// Block =>
// - does not contain an eplicit return statement, we have to include it (return ...)
// - can be MORE than one line, as long as contained by {}

let apples1 = (x) => {
  console.log(`There are ${x} apples outside`);
};

apples1(300);

// - More than one param WILL require ()
// - The default of an arrow function is underfined

