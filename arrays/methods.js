let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    console.log(foodItem);
}

let foodPush = food.push("Pizza")  //adds items to the end of the array and returns the length as a number
console.log(foodPush);
console.log("Push:", food);

let foodSplice = food.splice(1, 2, "Banana");  //splice at 1st index and remove 2 element as a new array and replace with "Value"
console.log(foodSplice); //returns an object
console.log("Splice:", food);

let foodPop = food.pop(); //removes last value and returns array and # of items
console.log(foodPop);
console.log("Pop:", food);

let foodShift = food.shift(); //removes first object in array and returns array and # of items, opposite of pop
console.log(foodShift);
console.log("shift:", food);

let foodUnshift = food.unshift("Popcorn", "Steak"); //Adds new elements to beginning of array, opposite of .push
console.log(foodUnshift);
console.log("Unshift:", food);