const API_URL = 'https://icanhazdadjoke.com/';
const API_CHUCK = 'https://api.chucknorris.io/jokes/random';
const API_WEATHER = 'https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml';
const spaceForJoke = document.getElementById("joke");
const reportJokes = [];


async function getJokes(){
    let API; 
    const randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
        API = API_CHUCK;
    }else{
        API = API_URL;
    }
    const jokes = await fetch(API,{
        headers:{
            Accept:"application/json",
        },
    }).then((response)=> response.json())

    console.log(jokes);
    spaceForJoke.innerHTML = jokes.joke;
    if (randomNum === 0) spaceForJoke.innerHTML = jokes.value;
    
    document.getElementById("buttons").innerHTML = '<button class="btn2" onclick="getJokes(); trackingJokes(1);"><h1>😓</h1></button><button class="btn2" onclick="getJokes(); trackingJokes(2);"><h1>😐</h1></button><button class="btn2" onclick="getJokes(); trackingJokes(3);"><h1>😆</h1></button>';
} 

document.getElementById("start").addEventListener("click",function(){
	this.value="Next Joke...";
});

function trackingJokes(number){

    const jokeIn = document.getElementById("joke").innerHTML;
    const currentDate = new Date();
    let currentDay = currentDate.toISOString();
   
    reportJokes.push({
        joke: jokeIn,
        score: number,
        date: currentDay
    });

    console.log(reportJokes);
}




