/*
-function expressions do not get hoisted
-Function expressions are functions stored withing variables
*/

/*
      (1)
    let hey = function hi() {
        console.log("HI");
    }

    1- the variable hey is now representitive of the function hi()
*/

let hey = function hi() {
    console.log("HI");
}

hey()