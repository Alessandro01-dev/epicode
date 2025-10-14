const searchInput = document.getElementById("searchField");
const searchButton = document.getElementById("button-search");
const searchResultsContainer = document.getElementById("found")
const foundResults = document.getElementById("searchSection");

const getSongInformations = async (inputValue) => {
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

  const songInformations = await getSongInformations(inputValue);


  songInformations.data.forEach(songInformation => {
    generateAndAppendCard(songInformation, foundResults, searchResultsContainer);

  });

};

const generateAndAppendCard = (song, resultsSection, resultsContainer) => {

  resultsContainer.classList.remove("d-none");

  const songCardWrapper = document.createElement("div");
  songCardWrapper.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");
  resultsSection.appendChild(songCardWrapper);

  const songCard = document.createElement("div");
  songCard.classList.add("card", "h-100", "p-3", "bg-dark", "rounded-4");
  songCardWrapper.appendChild(songCard);

  const songCardImageContainer = document.createElement("div");
  songCardImageContainer.classList.add("card-image-container");
  songCard.appendChild(songCardImageContainer);

  const songCardImage = document.createElement("img");
  songCardImage.src = song.album.cover_medium;
  songCardImage.alt = "album cover";
  songCardImage.classList.add("card-img-top", "w-100", "rounded-3")
  songCardImageContainer.appendChild(songCardImage);

  const songCardTimeStamp = document.createElement("p");
  songCardTimeStamp.setAttribute("id", "album-timestamp");
  songCardTimeStamp.innerText = returnMinutesFromSeconds(song.duration);
  songCardImageContainer.appendChild(songCardTimeStamp);

  const songCardBody = document.createElement("div");
  songCardBody.classList.add("card-body", "px-0", "pt-3", "pb-1", "text-white", "d-flex", "flex-column", "justify-content-between");
  songCard.appendChild(songCardBody);

  const songCardTitle = document.createElement("h5");
  songCardTitle.classList.add("card-title", "p-0", "m-0");
  songCardTitle.innerText = song.title;
  songCardBody.appendChild(songCardTitle);

  if (song.explicit_lyrics) {

    const songCardExplicitLyricsBadge = document.createElement("p");
    songCardExplicitLyricsBadge.classList.add("badge", "song-badge", "ml-2");
    songCardExplicitLyricsBadge.innerText = "E";
    songCardTitle.appendChild(songCardExplicitLyricsBadge);

  }

  const songCardAlbumTitle = document.createElement("p");
  songCardAlbumTitle.classList.add("card-text", "m-0", "text-secondary");
  songCardAlbumTitle.innerText = song.album.title;
  songCardBody.appendChild(songCardAlbumTitle);

  const songCardArtist = document.createElement("p");
  songCardArtist.classList.add("card-text", "text-secondary");
  songCardArtist.innerText = song.artist.name;
  songCardBody.appendChild(songCardArtist);

  const songCardBottomBodySection = document.createElement("div");
  songCardBottomBodySection.classList.add("d-flex", "align-items-center", "justify-content-end");
  songCardBody.appendChild(songCardBottomBodySection);

  const songCardFavouriteAlbumIcon = document.createElement("i");
  songCardFavouriteAlbumIcon.classList.add("bi", "bi-heart");
  songCardBottomBodySection.appendChild(songCardFavouriteAlbumIcon);

};


function returnMinutesFromSeconds(seconds) {

  const minutes = Math.floor(seconds / 60);

  let extraSeconds = seconds % 60;

  if (extraSeconds < 10) {
    extraSeconds = "0" + extraSeconds;
  }

  return minutes + ":" + extraSeconds;

}