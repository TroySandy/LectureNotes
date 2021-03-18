/* 
- A falsy value is a value that is considered false when encountered in a boolean context
    -false
    -0
    -'', "". ``
    -null
    -undefined
    -NaN (not a number)

- This means that when the JavaScript is expecting a boolean and it is given one of the values above, it will always evaluate to "falsy"
*/

let isOn = true;
// if (isOn)  also works because it just pulls the variable value from above, only works if variable is a boolean value
if (isOn == true) {
  console.log("The light is on");
}

isOn = false;
// if they dont match, then console.log shows nothing
if (isOn == true) {
  console.log("The light is off");
}

let weather = 55;

if (weather < 70) {
  console.log("Wear a jacket");
}