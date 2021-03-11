/*
    let hi = () => {
          (1) 
        return "hi"
    }
        (2)        (3)
    let newName = hi()

    console.log(newName)

    1- The keyword that brings our data out of our function
    2- We need a new variable to hold the value of the return
    3- When called, the function becomes the value of the return
*/

let hi = (greeting) => {
  // () not needed because there is only one param
  return greeting;
};
let helloGoodBye = hi("Go Away...");
console.log(helloGoodBye);

function capitilizeName(name) {
  let capName = "";
  for (let l in name) {
    if (l == 0) {
      capName += name[l].toUpperCase();
    } else {
      capName += name[l].toLowerCase();
    }
  }
  console.log(capName);
}

let finishedName = capitilizeName("CHisToPHer");


/*
    Make a tip calculator using a => {} function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

let check = 50;

let tipAmt = priceBeforeTip => {
    let tip = priceBeforeTip * .2;
    return tip;
}

let tip = tipAmt(check);
console.log(`Your meal cost $${check}, you should tip $${tip}`);