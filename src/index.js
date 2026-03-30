function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", handleSearchSubmit);
