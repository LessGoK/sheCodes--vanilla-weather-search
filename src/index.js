function updateWeatherDetails(response) {
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function fetchData(city) {
  let apiKey = "ba9bc3d0b8ta33o052590808f264424e";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios(apiUrl).then(updateWeatherDetails);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");

  fetchData(searchInput.value);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", handleSearchSubmit);

fetchData("Los Angeles");
