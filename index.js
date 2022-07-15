const API_URL = 'https://icanhazdadjoke.com/';
const spaceForJoke = document.getElementById("joke");
const reportJokes = [];


async function getJokes(){
    const jokes = await fetch(API_URL,{
        headers:{
            Accept:"application/json",
        },
    }).then((response)=> response.json())

    console.log(jokes);

    spaceForJoke.innerHTML = jokes.joke;
    
    document.getElementById("buttons").innerHTML = '<button class="btn2" onclick="getJokes(); trackingJokes(1);"><h1>😓</h1></button><button class="btn2" onclick="getJokes(); trackingJokes(2);"><h1>😐</h1></button><button class="btn2" onclick="getJokes(); trackingJokes(3);"><h1>😆</h1></button>';

} 

document.getElementById("start").addEventListener("click",function(){
	this.value="Next Joke...";
});

function trackingJokes(number){

    const jokeIn = document.getElementById("joke").innerHTML;
    const score = parseInt(number);
    const currentDate = new Date();
    let currentDay = currentDate.toISOString();
   
    reportJokes.push({
        joke: jokeIn,
        score: score,
        date: currentDay
    });

    console.log(reportJokes);
}



