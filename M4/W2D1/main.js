const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");

const getImages = async (inputValue) => {
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${inputValue}&per_page=60`, {
      headers: {
        Authorization: 'TdIntr7A5yZCQZ5jFT0YStLgrQmRymhKx8mXZXJTpM30empjrkrBVm10',
      }
    })

    const data = await response.json()
    return data

  } catch (error) {
    console.log(error);
  };
}

searchButton.addEventListener("click", async (e) => {

  e.preventDefault();

  resultsContainer.innerHTML = "";

  const inputValue = searchInput.value;

  const results = await getImages(inputValue);

  results.photos.forEach(photo => {

    console.log(photo)

    createCardImage(photo, resultsContainer)

  });

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

/*

Pexels.com API Key

TdIntr7A5yZCQZ5jFT0YStLgrQmRymhKx8mXZXJTpM30empjrkrBVm10

*/