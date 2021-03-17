let starWarsPeopleList = document.querySelector('ul')
fetch('https://swapi.dev/api/people')
.then(function(response) {
    return response.json();
})
.then(function(json){
    let people = json.results;
     for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
})

fetch('https://swapi.dev/api/planets')
.then(function(response) {
    return response.json();
})
.then(function(json){
    let people = json.results;
    // for(p of people){ //for...of (shows all items as arrays)
    //     console.log(p);
    // }
    // for(p in people){
    //     console.log(p); //for...in (lists the index value for all items)
    // }
    for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.climate + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
})
