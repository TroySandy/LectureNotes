//Equal to just looks at the value
let equalTo = "3" == 3;
console.log(equalTo);

//Strict Equal To (looks at data type and value)
let strictEqualTo = "3" === 3;
console.log(strictEqualTo);

//Not Equal To;
let notEqualTo = 3 != "3";
console.log(notEqualTo);

//Strict Not Equal To
let strictNotEqualTo = 3 !== "3";
console.log(strictNotEqualTo);

//Greater Than
let greaterThan = 9 > 7;
console.log(greaterThan);

//Less than
let lessThan = 5 < 9;
console.log(lessThan);

//Greater Than or Equal To
let greaterThanOrEqualTo = 4 >= 20;
console.log(greaterThanOrEqualTo);

//Less than or Equal to
let lessThanOrEqualTo = 2 <= 2;
console.log(lessThanOrEqualTo);

// Used in Conditionals
//And (both need to be true or false)
2 + 2 && 3 + 3;

//Or (only checks for one true or false)
2 || 3;