// API 
const apiKey = "a3aaf92221d99400b13470c11c4f0589";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Edinburgh&units=metric`

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    // document.querySelector(".city")
}

checkWeather();

const form = document.querySelector('form');
console.log(form);

// handle form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
})