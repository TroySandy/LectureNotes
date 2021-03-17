//1. test
let x = 10;
console.log(x);

//2. Get element by ID
let testParagraph = document.getElementById("testParagraph");
testParagraph.style.color = "red";
console.log(testParagraph);

//3. Query Selector All & innerText/innerHTML
console.log(document.querySelectorAll("p.sampleClass")); //makes an array with all items found
let sampleClasses = document.querySelectorAll("p.sampleClass");
sampleClasses[0].innerText = "My text has changed!"; //only changes text of index 0

sampleClasses.forEach((pTag) => {
  pTag.innerHTML = "<i>my text changed<b> using</b> a </i>forEach method";
});

/*  
-innerText - simply references or allows us to change the text of a specified element.  Will return only visible text in a "node"
-textContent - does the same thing as innerText, but will return the full text of a "node"
-innerHTML - allows us to set text as well as HTML elements, which will be nested inside of the current HTML element we are referencing 
*/

//3.5. textContent vs innerTExt
console.log(document.getElementById("spanTest").innerText);
console.log(document.getElementById("spanTest").textContent);

// // 4. addEventListener - click
// document.getElementById("clickThisButton").addEventListener("click", event => {
//     event.target.style.backgroundColor = "blue";
// });

// ~~~~Challenge~~~~ Make the button toggle from red to blue when clicked

// using this keyword

// document.getElementById("clickThisButton").addEventListener("click", function() {
//     this.style.backgroundColor = this.style.backgroundColor == "red" ? "blue" : "red";
// })

//using conditional

document
  .getElementById("clickThisButton")
  .addEventListener("click", (event) => {
    if (event.target.style.backgroundColor == "red") {
      event.target.style.backgroundColor = "blue";
    } else {
      event.target.style.backgroundColor = "red";
    }
  });

// 5. addEventListener - Keyup / getElementsByTagName

document.getElementById("nameInput").addEventListener("keyup", (event) => {
  console.log(event.target.value);
  let allPTags = document.getElementsByTagName("p");
  allPTags[0].innerText = "Nothing has been typed.";

  if (event.target.value == "") {
    allPTags[1].innerText = "Nothing has been typed!";
  } else {
    allPTags[1].innerText = `Everyone, please say Hello ${event.target.value}`;
  }
});
// These are actually dynamically changing the HTML as you interact