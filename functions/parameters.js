/*
- function parameters are place holders for the data we pass into the functio when invoking the function

                 (1)
    function hi(name) {
        console.log(`Hi ${name}`);
                            (2)
    }

        (3)
    hi("Troy");

    1- the parameter(s) that the function is accepting or holding
    2- Using string interpolation, we can refer to the parameter given to the function
    3- this is where wedefine what the parameter's value will be
    */

function hi(name) {
  console.log(`Hi ${name}`);
}

hi("Troy");

function troy(ticket1, ticket2) {
  console.log(`I exchanged my ticket for a ${ticket2} and a ${ticket1}`);
}

troy("pizza", "coke");

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/
function challenge(firstName, lastName){
  let yourName = "";
  yourName += firstName + " " + lastName;
  console.log((`Hello, my name is ${yourName}`));
}

challenge("Troy", "Sandy")