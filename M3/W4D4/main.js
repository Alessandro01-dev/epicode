const hamburgerMenuButtonElement = document.querySelector(".hamburger-menu");
const sideBarElement = document.querySelector("aside");
const applyNowAsideButtonElement = document.querySelector(".sidebar-btn");

function toggleClassToElement(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  };
};

hamburgerMenuButtonElement.addEventListener("click", () => {
  toggleClassToElement(hamburgerMenuButtonElement, "active");
  toggleClassToElement(sideBarElement, "show-sidebar");
  toggleClassToElement(applyNowAsideButtonElement, "fade-in-button");
});