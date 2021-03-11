/*
-Scope is how a computer keeps track of all the variables in a program 
-Scope can also be nestewd, where there is an outer scope (global scope) that encloses an innner scope(local scope)
    -Think about global scope as Planet Earth. Everything belongs to or is on Earth itself.  WE live in Indianapolis, which could be considered our local scope
*/

// let x = 12;

// function scope() {
//     let x = 33;
//     console.log("local", x);
// }

// scope(); // displays 33
// console.log("global", x); // displays 12

/*
-With the introduction of ES6 came two more keywords to declare variables: const & let
-const is a constant that cannot be changed
    -will get an error
-var and let seem to operate the same. But while they are similar, they behave differently
    -let is scoped to the nearest ENCLOSING block, while var is scoped to the nearest FUNCTION block
*/

//function block
// function () {
// This is the function block
// }

// enclosing block
// {    this is the enlosing block }

let y = 12;
function varTest() {
  var y = 33;
  if (true) {
    let y = 45; // var y = 45 will leak into the funct, let y = 45 will not leak out of the block
    console.log("If block", y);
  }
  console.log("Function Block", y);
}


varTest()
console.log("Global", y);
