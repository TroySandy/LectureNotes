let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//regular for loop
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

food.forEach(foodItem => console.log("forEach:", foodItem));

// the forEach method CANNOT return a value (cannot use the return keyword)

food.forEach((foodItem, index) => console.log(foodItem, index));

/*
Challenge

-Look at MDN docs to remind you
-Create array containing movies
-use .forEach() to list your movies
-Add aanother movie to the end
-and replace one of your movies with another one

*/

let movies = ["Ace Ventura", "Brink", "Lion King"]; 

movies.forEach(movieItem => console.log(movieItem));
console.log("forEach:", movies);

movies.push("Star Wars", "Star Trek", "The Office")
console.log("Push:", movies);

movies.splice(5,1,"The Hobbit");
console.log("Splice:", movies);

movies.forEach(movieItem => console.log(movieItem));
