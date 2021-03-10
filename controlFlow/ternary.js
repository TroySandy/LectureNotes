// A ternary basically acts as a shortcut to writing if, if/else, else/if statements
//Either way is fine, it is personal choice on ternary vs if,if/else,else/if vs switch

let num = 6;

//ternary
//      ? = if               : = else
num > 0 ? console.log("yes") : console.log("no");

//instead of
if (num > 0) {
  console.log("yes");
} else {
  console.log("no");
}

// Else/if statements
num == 0
  ? console.log("Hello")
  : num < 0
  ? console.log("hi")
  : console.log("goodbye");

//instead of
if (num == 0) {
  console.log("hello");
} else if (num < 0) {
  console.log("hi");
} else {
  console.log("goodbye");
}

/*
Write a ternary that does the same thing as the age challenge
​
Age Challenge (if else):
​
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 33;

// age >= 25 ? console.log("Yay! You can rent a car!") : age >=21 ? console.log("Yay, you can drink!") : age >= 18 ? console.log("Yay, you can vote!") : console.log("Sorry, you are to young for fun.");

age >= 25
  ? console.log("Yay! You can rent a car!")
  : age >= 21
  ? console.log("Yay, you can drink!")
  : age >= 18
  ? console.log("Yay, you can vote!")
  : console.log("Sorry, you are to young for fun.");

