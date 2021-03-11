/*

    function hi() {
        console.log("HI")
    }
    (1)
    hi()

    1- this is where we call/invoke our functions
*/


function hi() {
    console.log("HI")
}

hi;
hi(); //this is the correct way to invoke a function
console.log(hi);
console.log(hi());


// create a function that when invoked lists out the numbers 1 - 10



function count() {
for (let x = 1; x <= 10; x++) {
    console.log(x);
  }
}

count()

//Given the array, create a function that lists values individually
let arr = ['This', 'is', 'really', 'cool'];

function list (){
for (word of arr) {
    console.log(word);
}
}
list()