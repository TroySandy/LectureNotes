/*
-Arrays are containers that hold lists of items
-The are denoted by []


let list = [ "item1", "item2", "item3" ];
    (1)   (2) (3)

    1. name of array, or list
    2. The array is within square brackets []
    3. Each item, regardless of data type, is seperated by a comma
*/

let list = ["orange", "banana", "apple"];

console.log(list[0]);

let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha", "Amira"]]
// how do you pull out the name amria
// the print "Hello, Amira"

console.log("Hello", students[6][2]+ "!");