let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let color = ["blue", "green", "red", "yellow", "purple"];
console.log(color.length);

console.log(color.toString());

/*
CHALLENGE
************
​
    - First check if you are working with an array
    - Using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
*/
// let newArr = [1, 2, 3, 4, 5]

let newArr = new Array(1, 2, 3, 4, 5);

console.log(Array.isArray(newArr));

// console.log(newArr instanceof Array);

if (Array.isArray(newArr) === true) {
  let revnewArr = newArr.reverse();
  revnewArr.forEach((num) => console.log(num));
} else {
  console.log("Not an array");
}
