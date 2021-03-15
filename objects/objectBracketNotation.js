/*
-Object bracket notation can also allow us to find a value in an object
-Using object bracket notation can be handy if we want to store a key in a variable and then use that variable to parse through an object
-This works because all keys in an object are strings
*/

let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

console.log(garden.vegetable); //these do the same thing
console.log(garden["vegetable"]); 
//                  (object key as a string)


let baking = {};
baking["zucchini"] = "better make some bread";
//     (object key)   (object value)


console.log(baking);
