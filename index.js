const API_URL = 'https://icanhazdadjoke.com/';
const API_CHUCK = 'https://api.chucknorris.io/jokes/random';
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
    
    document.getElementById("buttons").innerHTML = '<button class="btn2" onclick="getJokes(); trackingJokes(1);"><img src="img/iconmonstr-smiley-4.svg" id="face-bad" alt="img-bad" height="80" width="80"></button><button class="btn2" onclick="getJokes(); trackingJokes(2);"><img src="img/iconmonstr-smiley-6.svg" id="face-bad" alt="img-face" height="80" width="80"></button><button class="btn2" onclick="getJokes(); trackingJokes(3);"><img src="img/iconmonstr-smiley-9.svg" id="face-good" alt="img-good" height="80" width="80"></button>';
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

window.addEventListener('load', () => {
    let lat, lon;
    let weather = document.getElementById('weather');
    let location = document.getElementById('location');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            lat = position.coords.latitude
            lon = position.coords.longitude
            const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4926b67bf37408016b1e93374ad7f02a`;
            console.log(API_WEATHER);

            fetch (API_WEATHER)
                .then(response => { return response.json()})
                .then(data => {
                    weather.innerHTML = `${Math.round((data.main.temp) - 273.15)}ºC`
                    location.innerHTML = (data.name)
                    icon.src = `./img/${(data.weather[0].main)}.svg`
                })
                .catch( error => {
                    console.log(error)
                })
        })
    }
})

