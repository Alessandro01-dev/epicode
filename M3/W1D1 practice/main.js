const searchIconElement = document.querySelector(".search-container img");
const searchInputElement = document.querySelector(".search-container input")

searchIconElement.addEventListener("click", () => {
  searchInputElement.focus()
})