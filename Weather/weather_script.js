const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const cityName = cityInput.value;
    getWeather(cityName);

});


async function getWeather(city) {
    const apiKey = '791ebede3b168b2057e87522c6a6cba9';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weather = {
            time: new Date(data.dt * 1000).toLocaleTimeString(),
            temperature: Math.round(data.main.temp - 273),
            condition: data.weather[0].description,
            humidity: data.main.humidity,
            icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

        };

        displayWeather(weather);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Unable to fetch the weather data.</p>';
    }
}

function displayWeather(weather) {
    const weatherHtml = `
        <h2>Current Weather</h2>
        <p>Time: ${weather.time}</p>
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Condition: ${weather.condition}</p>
        <p>Humidity: ${weather.humidity}%</p>
        <img src="${weather.icon}" alt="Weather Icon">
    `;
    weatherInfo.innerHTML = weatherHtml;
}
