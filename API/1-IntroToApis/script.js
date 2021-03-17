/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    What is an API?
    - Application Programming Interface (API)
    - Code that allows us access to the server or data
    - API's allow applications to communicate with eachother
    - It is an access point to a server, what we call an endpoint
    - Ex. https://localhost/sign_in
                          (endpoint)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ASYNCHRONOUS PROGRAMMING
        - Generally, code is read and implemented line by line - this is known as synchronous programming
            - in the case of fetching data from an outside source like we do with an API, if JavaScript did not have the ability to run code asynchronously, it would have to run each line of code > wait for the response from the API > and then finish running the rest of our code.
            - in basic terms, asynchronous programming allows a program to do more than one thing at a time
        - Asynchronous programming allows our code to continue to run while we're waiting on a response from an API. Once the fetch has finished retrieving the data, it then presents us with that data, without having to wait on any other processes
        - the fetch() method is an asynchronous method, and is part of the browser window, not JavaScript
        - the fetch() method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the response is available.
            - a promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection (error)
                - a promise is always one these states:
                    - pending: initial state, neither fulfilled or rejected
                    - fulfilled: meaning the operation completed successfully
                    - rejected: meaning the operation failed
            - in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made.
*/

/*
    Parts of a fetch()
     (1)            (2)
    fetch (`https://localhost/dogs`)

          (3)               (4)
    .then( (result) => result.json() ) 

          (5)               (6)
    .then( (json) => console.log(json) )

        (7)                 (8)
    .catch( (error) => console.log(error) )

    1. fetch() method which will return a promise
    2. The url that we will will fetch from, including a specific endpoint
    3. The first callback function, that will capture the promise returned from our fetch
    4. JSON-ifying the result, the .json() method will return another promise
    5. The second callback funtion, that will capture the promise returned from the .json() method
    6. The callback will console.log or pass on our JSON-ified results
    7. The third callback function, our error handling function
    8. Console.logging the error if one is found
*/

const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("ul");
const spaceCost  = document.querySelector("table");

searchForm.addEventListener("submit", (e) => fetchSpace(e));

function fetchSpace(e) {
  //   console.log(e);
  e.preventDefault();
  fetch(baseURL)
    .then((results) => results.json())
    .then((json) => displayRockets(json))
    .catch((err) => console.log(err));
}

function displayRockets(rockets) {
  console.log("Results:", rockets);
//   let spaceCars = rockets.forEach(rocket => {
//       console.log(rocket);
//       let rocketHolder = document.createElement("li");
//       rocketHolder.innerText = rocket.description
//       spaceShips.appendChild(rocketHolder)
//   })
                    // different ways to do the same thing
let spaceCars = rockets.forEach(rockets => {
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');
        rocketCost.style.color = "white"
        rocketName.style.color = "red"
        rocket.style.backgroundColor = "grey"

        rocketName.innerText = rockets.name;
        rocketCost.innerText = rockets.cost_per_launch;

        spaceCost.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
  return spaceCars
}
