// API 
const apiKey = "";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Edinburgh&units=metric`

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
}

checkWeather();

const form = document.querySelector('form');
console.log(form);

// handle form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
})