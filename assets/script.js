// Global variables
var cityInput = $('.city-input');
var weatherCard = $('.weather-card')

// Function to populate current weather data
function getWeather() {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=9c63818d2a58372824ad020aa4224924'
    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
    weatherCard.innerHTML = '' 
    var date = $('<p>');
    var milliseconds = new Date(data.dt * 1000)
    var convertedDate = milliseconds.toLocaleDateString()
    date.text(convertedDate);
    weatherCard.append(date);
    var iconCode = data.weather[0].icon;
    var iconUrl = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
    var icon = $('<img>');
    icon.src = iconUrl;
    weatherCard.append(icon);
    var temp = $('<p');
    temp.text(data.main.temp + '°F');
    weatherCard.append(temp);
    var wind = $('<p>');
    wind.text(data.wind.speed + ' MPH Winds');
    weatherCard.append(wind);
    var humidity = $('<p>');
    humidity.text(data.main.humidity + '% Humidity');
    weatherCard.append(humidity); 
})
}
// getWeather();