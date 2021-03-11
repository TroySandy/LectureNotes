/* 
-First pass: stores our variable/function declarations, but does not assign values. Anything that needs hoisted is hoisted here.
-Second Pass: assigns the values to our variable and executes and hoisted source code.
_always declare variables before using them
_funcations can be placed at top, bottom or middle of sheet, BUT THEY MUST COME AFTER ALL VARIABLES ARE NAMED
*/

// console.log(myName);
// let myName = "Troy";

b();

function b() {
    console.log("I have been hoisted!");
}