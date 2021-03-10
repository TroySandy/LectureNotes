/*
-Loops offer us a quick and easy way to do something repeatedly, or loop over something.
-There are many kinds of loops but they roughly all do the same thing.
    -It will repeat until a specified condition evaluates to true
        -for statement
        -do while statement
        -while statement
        -labeled statement
        -break statement
        -for in statement
        -for of statement

Note: there is a dsanger of infinate loops.  There are three main parts to a loop:
    -initial expression
    -condition
    -increament expression
    - divide the parts with a ;
*/

// i++ = i + 1
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("break");

//  Challenge: using a for loop, count to 20, by 2's, starting at 0
// a+= 2  =   a = a + 2
for (let a = 0; a <= 20; a += 2) {
  console.log(a);
}

console.log("break");

//Challenge, using a for loop, count from 10 to 0 by 1

for (let b = 10; b >= 0; b--) {
  console.log(b);
}

console.log("break");

//Challenge: using a for loop, count from 0, going down by 2's to -24
for (let c = 0; c >= -24; c -= 2) {
  console.log(c);
}

console.log("break");

// Challenge: using a for loop, go through a name and display each letter individually
let name1 = "Kenn";
for (let x = 0; x < name1.length; x++) {
  console.log(name1[x]);
}

