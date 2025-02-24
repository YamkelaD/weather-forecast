function refreshWeather(response) {
  let tempElement = document.querySelector("#temperature-value");
  let temp = response.data.temperature.current;
  let city = document.querySelector("#city");

  city.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temp);
}

function searchCity(city) {
  let apiKey = "0de8eo9d09bb333abaf5231bftedf514";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Cape Town");
