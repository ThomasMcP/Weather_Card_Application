
// API
const apiKey = "a3aaf92221d99400b13470c11c4f0589";

async function checkWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    if (response.status == 404 || response.status == 400) {
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    } 

    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"

    document.querySelector('.error').style.display = 'none';

//    UPDATE IMAGE
    document.querySelector(".weather img").src = `images/${data.weather[0].main.toLowerCase()}.png`
    document.querySelector('.weather').classList.remove('displayWeather');
}

const form = document.querySelector('form');

// handle form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const cityName = e.target[0].value;
    checkWeather(cityName)
    document.querySelector('.weather').style.display = 'block';
})
