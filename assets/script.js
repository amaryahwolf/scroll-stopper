$(document).ready(function() {

  // Global variables
    const weatherCard = $('.weather-card');
    var savedName = $('#user-name');
    var location;

  // Function to save name in local storage
  $('#name-btn').click(function () { 
      const name = $('#name-input').val();
      localStorage.setItem('username', name);
      // Show Location Input
      $('#name-form').addClass('hide');
      $('#location-form').removeClass('hide');
  })
    // Function to save location in local storage
    $('#location-btn').click(function () { 
        const locationText = $('#location-input').val();
        location = locationText;
        console.log(location)
        localStorage.setItem('location', locationText);
        // Show Location Input
        $('#location-form').addClass('hide');
        $('#greeting-container').removeClass('hide');
  // Function to display the name 
        var x = localStorage.getItem('username');
        savedName.text(x)
    })
  
  
  // Function to populate current weather data
  function getWeather() {
      const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=9c63818d2a58372824ad020aa4224924'
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

  // Functions to store the user's mood
  $('#happy-btn').click(function () {
      const mood = 'happy';
      localStorage.setItem('usermood', mood);
      showMainPage(mood);
  })
  $('#neutral-btn').click(function () {
    const mood = 'neutral';
    localStorage.setItem('usermood', mood);
    showMainPage();
})
  $('#sad-btn').click(function () {
    const mood = 'sad';
    localStorage.setItem('usermood', mood);
    showMainPage();
  })

  // Function to show the main page of the application
  function showMainPage(mood) {
    $('#mood-container').addClass('hide');
    $('#main-application').removeClass('hide');
  }
})