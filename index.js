const API_URL = 'https://icanhazdadjoke.com/';
const HTMLelement = document.getElementById("joke");

async function getJokes(){
    const jokes = await fetch(API_URL,{
        headers:{
            Accept:"application/json",
        },
    }).then((response)=> response.json())

    console.log(jokes);

    HTMLelement.innerHTML = jokes.joke;

} 

