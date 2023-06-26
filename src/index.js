let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here
let city = prompt("Enter a city");

if (weather.hasOwnProperty(city)) {
  let cityWeather = weather[city];
  let tempCelsius = Math.round(cityWeather.temp);
  let tempFahrenheit = Math.round((tempCelsius * 9) / 5 + 32);
  let humidity = Math.round(cityWeather.humidity);

  alert(
    "It is currently " +
      tempCelsius +
      "°C (" +
      tempFahrenheit +
      "°F) in " +
      city +
      " with a humidity of " +
      humidity +
      "%"
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+" +
      city
  );
}
