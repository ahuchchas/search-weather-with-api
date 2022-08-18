const loadWeatherData = () => {
    const cityName = document.getElementById('city-name').value;
    const APIKey = `5e1fed7f3f67681c0d4d9bee5ddedf70`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherInfo(data))
}

const displayWeatherInfo = data => {

    const weatherDiv = document.getElementById('weather-info');
    weatherDiv.innerHTML =
        `<div class="card-body text-center">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Temperature: ${data.main.temp} °C</h6>
        <p class="card-text">Feels like: ${data.main.feels_like} °C</p>
        <p class="card-text">Max: ${data.main.temp_max} °C</p>
        <p class="card-text">Min: ${data.main.temp_min} °C</p>
    </div>`;

}