
// API
const apiKey = "a3aaf92221d99400b13470c11c4f0589";

async function checkWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"
}

checkWeather();

const form = document.querySelector('form');
console.log(form);

// handle form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    const cityName = e.target[0].value;
    checkWeather(cityName)
    // document.querySelector(".city").innerHTML = e.target[0].value;
})
