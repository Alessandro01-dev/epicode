const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");
const resultsMainContainer = document.getElementById("results-main-container");

let spinnerContainer;

const showSpinner = () => {

  spinnerContainer = document.createElement("div");
  spinnerContainer.classList.add("spinner-border", "text-secondary", "my-0", "mx-auto");
  spinnerContainer.setAttribute("role", "status");
  resultsContainer.appendChild(spinnerContainer);

  const spinnerElement = document.createElement("span");
  spinnerElement.classList.add("visually-hidden");
  spinnerElement.innerText = "Loading..."
  spinnerContainer.appendChild(spinnerElement);
}

const hideSpinner = () => {

  spinnerContainer.classList.add("d-none");

}

const noResultsMessage = (message) => {

  const alertElement = document.createElement("div");
  alertElement.classList.add("alert", "alert-light", "text-center");
  alertElement.innerText = message;
  resultsMainContainer.appendChild(alertElement);

}

const handleError = (error) => {

  const alertElement = document.createElement("div");
  alertElement.classList.add("alert", "alert-danger", "text-center");
  alertElement.innerText = error;
  resultsMainContainer.appendChild(alertElement);

}

const getImages = async (inputValue) => {

  showSpinner();

  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${inputValue}&per_page=60`, {
      headers: {
        Authorization: 'TdIntr7A5yZCQZ5jFT0YStLgrQmRymhKx8mXZXJTpM30empjrkrBVm10',
      }
    })

    const data = await response.json()
    return data

  } catch (error) {
    resultsMainContainer.innerHTML = "";
    handleError(error)
  } finally {
    hideSpinner();
  }
}

searchButton.addEventListener("click", async (e) => {

  try {

    e.preventDefault();

    resultsContainer.innerHTML = "";
    resultsMainContainer.classList.remove("d-none");

    const inputValue = searchInput.value;

    const results = await getImages(inputValue);

    results.photos.forEach(photo => {

      createCardImage(photo, resultsContainer)

    });

  } catch (error) {
    resultsMainContainer.innerText = "";
    handleError(error)
  }

})

const createCardImage = (image, container) => {

  const cardImageItem = document.createElement("div");
  cardImageItem.classList.add("gallery-item");
  container.appendChild(cardImageItem);

  const cardImage = document.createElement("img");
  cardImage.src = image.src.original;
  cardImage.alt = image.alt;
  cardImageItem.appendChild(cardImage);

  const cardImageInfoContainer = document.createElement("div");
  cardImageInfoContainer.classList.add("d-flex", "flex-column", "align-items-start", "info-container");
  cardImageItem.appendChild(cardImageInfoContainer);

  const cardImageInfoContainerPhotographer = document.createElement("h6");
  cardImageInfoContainerPhotographer.classList.add("m-0");
  cardImageInfoContainerPhotographer.innerText = image.photographer;
  cardImageInfoContainerPhotographer.href = image.photographer_url;
  cardImageInfoContainer.appendChild(cardImageInfoContainerPhotographer);

  const cardImageInfoContainerDescription = document.createElement("p");
  cardImageInfoContainerDescription.classList.add("m-0", "info-description");
  cardImageInfoContainerDescription.innerText = image.alt;
  cardImageInfoContainer.appendChild(cardImageInfoContainerDescription);

}