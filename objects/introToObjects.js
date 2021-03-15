let netflix = {
  id: 1,
  name: "The Office",
  season1: {
    seasonInfo: {
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot",
        },
        {
          episode: 2,
          episodeName: "Diversity Day",
        },
        {
          episode: 3,
          episodeName: "Health Care",
        },
        {
          episode: 4,
          episodeName: "The Alliance",
        },
        {
          episode: 5,
          episodeName: "Basketball",
        },
        {
          episode: 6,
          episodeName: "Hot Girl",
        },
      ],
    },
  },
  season2: {},
  season3: {},
};
console.log("all data:", netflix);
console.log("just Season Info", netflix.season1.seasonInfo);
console.log(
  "specific episode name:",
  netflix.season1.seasonInfo.episodeInfo[3].episodeName
);
// Challenge log one episode number and one episode name
console.log(
  "specific episode:",
  netflix.season1.seasonInfo.episodeInfo[2].episode
);
console.log(
  "specific episode name:",
  netflix.season1.seasonInfo.episodeInfo[5].episodeName
);

/*
-JSON stands for JavaScript Object Notation
-the JSON is direved from JavaScript Object Notation syntax, but the JSON format is text only
-JSON exists as a string, which is useful when you want to fecth data from a server.  It needs to be converted to a native JavaScript Object if you want to access it. 
-All keys are wrapped in "" in a JSON
-example JSON Data - https://rickandmortyapi.com/api/character/

*/

let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit1: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevil: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky Pig",
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko",
  },
  nbaPlayers: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkNicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charlotteHornets2: "Muggsy Bogues",
  },
};

console.log(Object.keys(spaceJam));
console.log(Object.keys(spaceJam.nbaPlayers)); //returns keys
console.log(Object.values(spaceJam.toonSquad)); //returns values