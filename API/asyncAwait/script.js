async function myFunction() {
  //await
}

const myFunc = async () => {
  //await
};

/* 
Two key differences between regular funcitons and async functions:
    -Async Functions:
        -Unlocks the use of the await keyword
        -Always returns a promise
*/

// async function fn() {
//   throw Error("THIS IS A MISTAKE");
// }

// fn().then(console.log).catch(console.log); // === fn().then(results => console.log(results)).catch(error => console.log(error)) just with less code

// function myFn() {
//   return Promise.resolve("Hello");
// }

// myFn().then(console.log);

function firstLockBox() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve(12345);
    } else {
      reject(Error("Unexpected Error!"));
    }
  });
}

function secondLockBox(key) {
  return new Promise(function (resolve, reject) {
    if (key === 12345) {
      resolve(98765);
    } else {
      reject(Error("Wrong Key!"));
    }
  });
}

function thirdLockBox(key) {
  return new Promise(function (resolve, reject) {
    if (key === 98765) {
      resolve("Treasure!");
    } else {
      reject(Error("Wrong Key!"));
    }
  });
}

async function openBoxes() {
  let firstBox = await firstLockBox();
  let secondBox = await secondLockBox(firstBox);
  let thirdBox =  await thirdLockBox(secondBox);
  console.log("1st:", firstBox);
  console.log("2nd:", secondBox);
  console.log("3rd:", thirdBox);
}

openBoxes();
console.log('hello world');

"https://rickandmortyapi.com/api/character/"

let fetchRickandMorty = async () => {
    let results = await fetch("https://rickandmortyapi.com/api/character/")
    let json = await results.json();
    handleResults(json);
}

fetchRickandMorty().then(handleResults);

function handleResults(results) {
    console.log(results);
}