// Global variables
const cityInput = $('.city-input');
const weatherCard = $('.weather-card')

// Function to populate current weather data
function getWeather() {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=9c63818d2a58372824ad020aa4224924'
    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
    weatherCard.innerHTML = '' 
    const date = $('<p>');
    const milliseconds = new Date(data.dt * 1000)
    const convertedDate = milliseconds.toLocaleDateString()
    date.text(convertedDate);
    weatherCard.append(date);
    const iconCode = data.weather[0].icon;
    const iconUrl = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
    const icon = $('<img>');
    icon.src = iconUrl;
    weatherCard.append(icon);
    const temp = $('<p');
    temp.text(data.main.temp + '°F');
    weatherCard.append(temp);
    const wind = $('<p>');
    wind.text(data.wind.speed + ' MPH Winds');
    weatherCard.append(wind);
    const humidity = $('<p>');
    humidity.text(data.main.humidity + '% Humidity');
    weatherCard.append(humidity); 
})
}
// getWeather();