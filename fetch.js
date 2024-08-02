//fetch - function used for making HTTP requests to fetch responses (JSON style data, images, files)
//      - Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send a data asynchronously over the web
//      - fetch(url, {options})  //default for options = method : "GET"
//      - fetch(url, {method : "GET"})    = to get a resource  => this is the default when we use option
//      - fetch(url, {method : "POST"})   = to sense some data
//      - fetch(url, {method : "PUT"})    = to replace some data
//      - fetch(url, {method : "DELETE"}) = to delete some data


//STATUS:
//Informational responses = 100 to 199
//Successful responses = 200 to 299  -> ok:true
//Redirection messages = 300 to 399
//Client error responses = 400 to 499  -> ok:false
//Server error responses = 500 to 599


//https://pokeapi.co/  =  api (google)


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")  //if here in place of pikachu there was another name then it will throw the error of could not fetch...
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })  //json shows it in the form of object array //without json it would be shown as string array
    .then(data => console.log(data))
    //.then(data => console.log(data.name))
    .catch(error => console.error(error));



fetchData();
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Invalid fetch resource");
        }
        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}    