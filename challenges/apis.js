// In order to fetch from this API, you must do a few things
// 1: Login with github, to https://rapidapi.com/ (This will use your github credentials to log you into rapidAPI.com)
// 2: Navigate to https://rapidapi.com/KegenGuyll/api/dad-jokes, the 'Dad Jokes' API
// 3: Navigate to the 'Pricing' Tab, (dont worry, no money will be spent :)
// 4: Select the 'Basic' version, which is free
// 5: Make sure to include these headers in your fetch, which are provided by RapidAPI
//      "x-rapidapi-key": "YOUR-API-KEY",
// 	    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
//  	"useQueryString": true
// Challenge:
// Inside of the dadJokes() function...
// 1. fetch a random dad joke from 'https://dad-jokes.p.rapidapi.com/random/joke'
// 2. if there is no joke, display text that says 'no jokes available'
// 3. display the setup and punchline to the joke, separately, however you'd like (ex. setTimeout()
// function to display at multiple different times, or simply in two different tags)
// 4. use DOM manipulation to style the dad joke
// 5. feel free to use the existing h2, p, and img tags with classes and id's to display your
// content :)

let title = document.getElementById("title");
title.innerText = "Dad Joke ";
title.style.marginLeft = "33vw";

function dadJokes() {
  fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    Accept: "application/json",
    headers: {
      "x-rapidapi-key": "df1dbfa139msh6eb321abc3168ddp1805d9jsn668e26b5df16",
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((data) => data.json())
    .then((data) => fetchFunction(data));

  function fetchFunction(data) {
    console.log(data);
    data.body.forEach((joke) => {
      console.log(joke.setup);
      let punchline = joke.punchline;
      if (joke) {
        let pTag = document.getElementById("dadJoke");
        let setup = joke.setup;
        pTag.innerText = setup;
        if(setup){
            let why = setTimeout(() => {
                pTag.innerText = punchline
            }, 5000)
            return why
        }
      }else {
          let pTag = document.getElementById('dadJoke')
          pTag.innerText = "no Dad jokes available"
      }
    });
  }
}
