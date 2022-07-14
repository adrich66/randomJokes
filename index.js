const API_URL = 'https://icanhazdadjoke.com/';
const HTMLelement = document.getElementById("joke");

async function getJokes(){
    fetch('${API_URL}')
} 
.then((response)=> response.json())

