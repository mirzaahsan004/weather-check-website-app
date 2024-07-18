// script.js

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'a5f5ab6e66f99ec3eb695bf53e715b51';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();

        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        document.getElementById('weather-icon').style.backgroundImage = `url('http://openweathermap.org/img/wn/${data.weather[0].icon}.png')`;
    } catch (error) {
        alert('City not found!');
    }
}
