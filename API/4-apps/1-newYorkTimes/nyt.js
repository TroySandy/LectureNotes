const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
const key = "vr8WVzJQYplm06pmA6HRrEQ6uJmJlAtz";
let url;

// references to DOM elements
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
// defining stlye for nav button
nav.style.display = 'none';
let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
//adding event listeners
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);


// fetchs the results and json-ifys them  
function fetchResults(e) { // defining the function of fetch results (e)
    // console.log(e);
    e.preventDefault();// prevents the page from refreshing 
// makes the complete url and making endpoint
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
    // console.log('URL:', url);
// checks for a start date
    if (startDate.value !== '') { // if start date is blank, we skip thi
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;  //concatenates the url from above and the start date
        console.log('URL:', url);
    }
// checks if there is a end date
    if (endDate.value !== '') { //if blank, skip code
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;// adds to above url and end date
        console.log('URL:', url);
    }
// requests data from the url complied and makes a promise
    fetch(url)
        .then(function (result) { // a promise resolver, takes a function and a param of result
            console.log(result)
            return result.json(); // returns json-ified  result which returns a promise
        })
        .then(function (json) { // takes the promise value from above and resolves it, the json placeholder is the actual info 
            console.log(json);
            displayResults(json); // invoking the displayresults function
        })
}

////////////////////////////////////////////////////////////////////////////////////////
// displays the json info on the webpage
function displayResults(json) { //declaring the actual displayresults function with the param json
    console.log('Display Results', json);
    // console.log(json.response.docs);
// removes the previous search results
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs; //defining var articles with dot notation and looking into keywords
    //articles is the array of keyword docs from the returned JSON object 
    // console.log(articles);

// adds the info to the HTML doc if found
    if (articles.length === 0) { // will return nothing if there are no articles
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) {
            // console.log(i); //defines variables
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let current = articles[i]; // creates current variable and uses []notation to dig into the array articles, this is grabbing teh current iteration as we loop.  
            console.log('Current:', current);

            link.href = current.web_url; // takes the anchor tag from the link variable and setting the HTML property of href and sets the web_url from the current object to that value
            link.textContent = current.headline.main; //adds info from string in json to the link tag
            para.textContent = 'Keywords: ';// adds info from the string in json to the para var, p tag
// adds span element for each keyword in the keywords array 
            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
// adds  first img to div if present
            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }
            clearfix.setAttribute('class', 'clearfix');// sets class="clearfix" to the div element set above
            heading.appendChild(link); //next 6 lines actually append the tags to the HTML 
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);// will not actually get into the doc until this tag becuase it is the only tag WE put in the code.  rest are added by javascript

            clearfix.style.padding = '50px' //adds more padding to the image
        }
    }
// determines if the nav bar is showing, if there are 10 articles it will show nav bar, if there are less than ten it will not show nav bar
    if (articles.length === 10 ) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// if (pageNumber !== 0){
//   previousBtn.style.display = "block";
// } else {
//   previousBtn.style.disply = "none";
// }

// if (pageNumber > 0 && articles.length !== 10) {
//   nextBtn.style.display = "none"
// } else {
//   nextBtn.style.display = "block"
// }
// fetchs next page of results
function nextPage(e) {
    console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}
//  fetchs the previous page of results
function previousPage(e) {
    console.log('Previous button clicked');
    if (pageNumber >= 0) {
        pageNumber--;
        // fetchResults(e);
    } else {
      
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
}