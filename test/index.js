// JavaScript
const apiKey = "5f81365ae536b7da813d034c891315db";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

$(document).ready(function () {
  // Declare the units variable outside of the toggleUnit function
  let units = "metric";

  // Call the updateWeather function with the current units when the page loads
  updateWeather(units);

  // Attach an event listener to the toggle button to switch between metric and imperial units
  $("#option1").on("click", function () {
    units = "imperial";
    updateWeather(units);
  });

  $("#option2").on("click", function () {
    units = "metric";
    updateWeather(units);
  });

  function updateWeather(units) {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      // Make the API call to get the weather information
      $.ajax({
        url: weatherUrl + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + `&units=${units}`,
        success: function (result) {
          console.log(result);

          // Update the weather information on the page
          $("#city").html(result.name);
          $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png");
          if (units === "imperial") {
            $("#temperature").html("Temperature: " + result.main.temp + "&#8457;");
          } else {
            $("#temperature").html("Temperature: " + result.main.temp + "&#8451;");
          }
          $("#latitude").html("Latitude: " + latitude);
          $("#longitude").html("Longitude: " + longitude);

          // Use Moment.js to format the date
          let date = moment().format("MMMM Do YYYY, h:mm:ss a");
          $("#date").html("Today's date: " + date);
        },
        error: function () {
          // If there is an error with the API call, display an error message
          $("#city").html("Unable to retrieve weather information");
        },
      });
    });
  }
});
