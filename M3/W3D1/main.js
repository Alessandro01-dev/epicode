const searchIconElement = document.querySelector(".bi-search");
const searchInputElement = document.querySelector(".me-2");

function displaySearchInputElement() {
  if (searchInputElement.classList.contains("d-none")) {
    searchInputElement.classList.remove("d-none");
    searchInputElement.classList.add("d-block");
  } else {
    searchInputElement.classList.remove("d-block");
    searchInputElement.classList.add("d-none");
  }
}
searchIconElement.addEventListener("click", () => {
  displaySearchInputElement();
  searchInputElement.focus();
});

const profilePictureElement = document.querySelector("#profile-picture");
const profileBtnElement = document.querySelector("#profile-button");

profilePictureElement.addEventListener("click", () => {
  profileBtnElement.click();
})