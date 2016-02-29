// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

navigator.geolocation.getCurrentPosition( function(position) {
  getWeather(position.coords.latitude+','+position.coords.longitude); 
});

var getWeather = function(location) {
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      for(var x = 0; x < 5; x++){
        if(x==0){
          // Main Weather
          // Display Temperature
          $('.temp-0').text(weather.temp + "° " + weather.units.temp);
          // Display Icon
          $('.weather-0').addClass( 'icon-' + weather.code );
          // Display City
          $('.city-0').text(weather.city);
          // Wind Speed
          $('.wSpeed').text("Wind Speed: " + weather.wind.speed + "mph ");
          // Wind Direction
          $('.wDir').text(weather.wind.direction);
          // Current Condition
          $('.curCond').text(weather.currently);
        }
        else {
          // Display Day
          $('.day-' + x).text(weather.forecast[x].day);
          // Display High Temperature
          $('.highTemp-' + x).text("High: " + weather.forecast[x].high + "° " + weather.units.temp);
          // Display Low Temperature
          $('.lowTemp-' + x).text("Low: " + weather.forecast[x].low + "° " + weather.units.temp);
          // Display Icon
          $('.weather-' + x).addClass( 'icon-' + weather.forecast[x].code );
        }
      }
      
      // Entire weather object
      console.log(weather);
      
      // Color Changing Text
      spectrum();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  });
};