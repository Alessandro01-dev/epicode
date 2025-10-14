const searchInput = document.getElementById("searchField");
const searchButton = document.getElementById("button-search");
const searchResultsContainer = document.getElementById("found")
const foundResults = document.getElementById("searchSection");

const getArtistInformations = async (inputValue) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${inputValue}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error.message)
  };
};

const search = async () => {

  foundResults.innerHTML = "";

  const inputValue = searchInput.value;

  const albumInformations = await getArtistInformations(inputValue);
  

  albumInformations.data.forEach(albumInformation => {
    console.log(albumInformation)
    generateAndAppendCard(albumInformation, foundResults, searchResultsContainer);

  });

};

const generateAndAppendCard = (album, resultsSection, resultsContainer) => {

  resultsContainer.classList.remove("d-none");

  const albumCardWrapper = document.createElement("div");
  albumCardWrapper.classList.add("col-6", "col-md-4", "col-lg-3");
  resultsSection.appendChild(albumCardWrapper);

  const albumCard = document.createElement("div");
  albumCard.classList.add("card", "h-100", "p-3", "bg-dark", "rounded-4");
  albumCardWrapper.appendChild(albumCard);

  const albumCardImageContainer = document.createElement("div");
  albumCardImageContainer.classList.add("position-relative");
  albumCard.appendChild(albumCardImageContainer);

  const albumCardImage = document.createElement("img");
  albumCardImage.src = album.album.cover_medium;
  albumCardImage.alt = "album cover";
  albumCardImage.classList.add("card-img-top", "w-100", "rounded-3")
  albumCardImageContainer.appendChild(albumCardImage);

  const albumCardTimeStamp = document.createElement("p");
  albumCardTimeStamp.classList.add("position-absolute", "bottom-0", "end-0", "m-2", "bg-dark", "text-white", "p-1", "rounded-1", "opacity-75");
  albumCardTimeStamp.setAttribute("id", "album-timestamp");
  // albumCardTimeStamp.innerText = album.length;
  albumCardImageContainer.appendChild(albumCardTimeStamp);

  const albumCardBody = document.createElement("div");
  albumCardBody.classList.add("card-body", "px-0", "pt-3", "pb-1", "text-white", "d-flex", "flex-column", "justify-content-between");
  albumCard.appendChild(albumCardBody);

  const albumCardTitle = document.createElement("h5");
  albumCardTitle.classList.add("card-title", "pt-2");
  albumCardTitle.innerText = album.album.title;
  albumCardBody.appendChild(albumCardTitle);

  const albumCardArtist = document.createElement("p");
  albumCardArtist.classList.add("card-text");
  albumCardArtist.innerText = album.artist.name;
  albumCardBody.appendChild(albumCardArtist);

  const albumCardQuarterNoteDivider = document.createElement("span");
  albumCardQuarterNoteDivider.classList.add("text-secondary", "px-1");
  albumCardQuarterNoteDivider.innerHTML = " &#9834; ";
  albumCardArtist.appendChild(albumCardQuarterNoteDivider);

  const albumCardBottomBodySection = document.createElement("div");
  albumCardBottomBodySection.classList.add("d-flex", "align-items-center", "justify-content-end");
  albumCardBody.appendChild(albumCardBottomBodySection);

  const albumCardFavouriteAlbumIcon = document.createElement("i");
  albumCardFavouriteAlbumIcon.classList.add("bi", "bi-heart");
  albumCardBottomBodySection.appendChild(albumCardFavouriteAlbumIcon);

};
