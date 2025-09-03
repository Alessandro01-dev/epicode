const searchIconElement = document.querySelector(".search-container img");
const searchInputElement = document.querySelector(".search-container input")

searchIconElement.addEventListener("click", () => {
  searchInputElement.focus()
})


const menuButtonElement = document.getElementById("menu-icon-button");
const sidebarElement = document.querySelector("aside");

function toggleClassListFromSidebar() {
  sidebarElement.classList.toggle("hide-sidebar")
}
menuButtonElement.addEventListener("click", toggleClassListFromSidebar)