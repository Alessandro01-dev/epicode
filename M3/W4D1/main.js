const searchIconContainerElement = document.querySelector(".search-icon");
const searchInputElement = document.querySelector(".search-input");

function hideSearchinputElement() {
  searchInputElement.classList.toggle("hide-search-input");
};

searchIconContainerElement.addEventListener("click", hideSearchinputElement);