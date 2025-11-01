const searchInput = document.querySelector(".search-container input");
const searchIcon = document.querySelector(".search-icon-container i");

const hideAndShowSearchInput = () => {

  searchInput.classList.toggle("d-none")
  searchIcon.classList.toggle("text-white")

}

searchIcon.addEventListener("click", hideAndShowSearchInput)