const albums = [
  {
    cover: "https://m.media-amazon.com/images/I/51UtWpxbNYL._UF1000,1000_QL80_.jpg",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    genre: "Progressive rock",
    year: 1973,
    length: "42:50"
  },
  {
    cover: "https://m.media-amazon.com/images/I/91qw0ldKIKL.jpg",
    title: "Led Zeppelin",
    artist: "Led Zeppelin",
    genre: "Blues rock",
    year: 1969,
    length: "44:26"
  },
  {
    cover: "https://m.media-amazon.com/images/I/71PMScAWP+L._UF1000,1000_QL80_.jpg",
    title: "Rumours",
    artist: "Fleetwood Mac",
    genre: "Pop rock",
    year: 1977,
    length: "39:41"
  },
  {
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-myUoiQar5mRf8WqGOKipE9P6DPSKzhdGQ&s",
    title: "Abbey Road",
    artist: "The Beatles",
    genre: "Pop rock",
    year: 1969,
    length: "47:57"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/commons/3/33/Are_You_Experienced_-_US_cover-edit.jpg",
    title: "Are You Experienced",
    artist: "Jimi Hendrix",
    genre: "Psychedelic rock",
    year: 1967,
    length: "38:34"
  },
  {
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm3ean9Xy9VRD_VvgOSWCJQvyQuc2rhoiqA&s",
    title: "Selling England by the Pound",
    artist: "Genesis",
    genre: "Progressive rock",
    year: "1973",
    length: "53:48"
  },
  {
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXni3DSzxOmpyDj15Xf-Al6saPDLeItc2B6w&s",
    title: "The Doors",
    artist: "The Doors",
    genre: "Psychedelic rock",
    year: 1967,
    length: "43:05"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png/250px-Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png",
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    genre: "Progressive rock",
    year: 1975,
    length: "44:05"
  },
  {
    cover: "https://m.media-amazon.com/images/I/71nxRqKGA8L.jpg",
    title: "A Night At The Opera",
    artist: "Queen",
    genre: "Progressive rock",
    year: 1975,
    length: "43:08"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Whosnext.jpg",
    title: "Who's Next",
    artist: "The Who",
    genre: "Hard Rock rock",
    year: 1971,
    length: "43:39"
  },
  {
    cover: "https://pure-music.co.uk/wp-content/uploads/2019/04/Hotel-California-Album-Cover.png",
    title: "Hotel California",
    artist: "Eagles",
    genre: "Country rock",
    year: 1976,
    length: "43:28"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/1/19/JethroTullAqualungalbumcover.jpg",
    title: "Aqualung",
    artist: "Jethro Tull",
    genre: "Progressive rock",
    year: 1971,
    length: "42:55"
  }, {
    cover: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Rolling_Stones_-_Sticky_Fingers.png",
    title: "Sticky Fingers",
    artist: "The Rolling Stones",
    genre: "Blues Rock",
    year: 1971,
    length: "46:25"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/8/84/In_the_Court_of_the_Crimson_King_-_40th_Anniversary_Box_Set_-_Front_cover.jpeg",
    title: "In the Court of the Crimson King",
    artist: "King Crimson",
    genre: "Progressive Rock",
    year: 1969,
    length: "43:54"
  },
  {
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnaKNWtPKUtpMPnZTD-_PBLifQIQ3klDkfw&s",
    title: "The Wall",
    artist: "Pink Floyd",
    genre: "Progressive rock",
    year: 1979,
    length: "81:03"
  },
  {
    cover: "https://m.media-amazon.com/images/I/61us1A1hwkL._UF1000,1000_QL80_.jpg",
    title: "Brothers in Arms",
    artist: "Dire Straits",
    genre: "Pop rock",
    year: 1985,
    length: "55:11"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6e/DavisBowieAladdinSane.jpg",
    title: "Aladdin Sane",
    artist: "David Bowie",
    genre: "Glam rock",
    year: 1973,
    length: "41:32"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/4/4a/Moving_Pictures.jpg",
    title: "Moving Picture",
    artist: "Rush",
    genre: "Progressive rock",
    year: 1981,
    length: "40:03"
  },
]

const mainRowElement = document.querySelector(".js-main-row");


function generateAndAppendCard(album) {

  const columnElement = document.createElement("div");
  columnElement.classList.add("col-6", "col-md-4", "col-lg-3");
  mainRowElement.appendChild(columnElement);

  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "h-100", "p-3", "bg-dark", "rounded-4");
  columnElement.appendChild(cardElement);

  const imageContainerElement = document.createElement("div");
  imageContainerElement.classList.add("position-relative");
  cardElement.appendChild(imageContainerElement);

  const imageElement = document.createElement("img");
  imageElement.src = album.cover;
  imageElement.alt = "album cover";
  imageElement.classList.add("card-img-top", "w-100", "rounded-3")
  imageContainerElement.appendChild(imageElement);

  const timestampElement = document.createElement("p");
  timestampElement.classList.add("position-absolute", "bottom-0", "end-0", "m-2", "bg-dark", "text-white", "p-1", "rounded-1", "opacity-75");
  timestampElement.setAttribute("id", "album-timestamp");
  timestampElement.innerText = album.length;
  imageContainerElement.appendChild(timestampElement);

  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body", "px-0", "pt-3", "pb-1", "text-white", "d-flex", "flex-column", "justify-content-between");
  cardElement.appendChild(cardBodyElement);

  const cardTitleElement = document.createElement("h5");
  cardTitleElement.classList.add("card-title", "pt-2");
  cardTitleElement.innerText = album.title;
  cardBodyElement.appendChild(cardTitleElement);

  const cardArtistElement = document.createElement("p");
  cardArtistElement.classList.add("card-text");
  cardArtistElement.innerText = album.artist;
  cardBodyElement.appendChild(cardArtistElement);

  const quarterNoteDividerElement = document.createElement("span");
  quarterNoteDividerElement.classList.add("text-secondary", "px-1");
  quarterNoteDividerElement.innerHTML = " &#9834; ";
  cardArtistElement.appendChild(quarterNoteDividerElement);

  const cardYearElement = document.createElement("span");
  cardYearElement.classList.add("fw-light");
  cardYearElement.innerText = album.year;
  cardArtistElement.appendChild(cardYearElement);

  const bottomCardBodySectionElement = document.createElement("div");
  bottomCardBodySectionElement.classList.add("d-flex", "align-items-center", "justify-content-between");
  cardBodyElement.appendChild(bottomCardBodySectionElement);

  const genreBadgeElement = document.createElement("div");
  genreBadgeElement.classList.add("badge", "text-bg-secondary", "fw-light");
  genreBadgeElement.setAttribute("id", "genre-badge");
  genreBadgeElement.innerText = album.genre;
  bottomCardBodySectionElement.appendChild(genreBadgeElement);

  const favouriteAlbumIconsElement = document.createElement("i");
  favouriteAlbumIconsElement.classList.add("bi", "bi-heart");
  bottomCardBodySectionElement.appendChild(favouriteAlbumIconsElement);

};

albums.forEach(album => {
  generateAndAppendCard(album);
})


const heartIconElements = document.querySelectorAll(".bi", ".bi-heart");

function fillAndEmptyHeartIcon() {
  heartIconElements.forEach(heartIconElement => {
    heartIconElement.addEventListener("click", () => {
      if (heartIconElement.classList.contains("bi-heart")) {
        heartIconElement.classList.remove("bi-heart");
        heartIconElement.classList.add("bi-heart-fill");
      } else {
        heartIconElement.classList.remove("bi-heart-fill");
        heartIconElement.classList.add("bi-heart");
      }
    })
  })
};
fillAndEmptyHeartIcon();

const formElement = document.querySelector("form")
const inputElement = document.querySelector(".form-control");
const searchButtonElement = document.querySelector(".btn");
const searchedResults = [];

function searchByTitle() {
  const inputValue = inputElement.value.toLowerCase();

  for (let i = 0; i < albums.length; i++) {
    const albumTitle = albums[i].title.toLowerCase();

    if (albumTitle.includes(inputValue)) {
      searchedResults.push(albums[i]);
    }
  }
};

function createNoResultsMessage() {
  const noResultsMessage = document.createElement("div");
  noResultsMessage.classList.add("text-center");
  noResultsMessage.innerText = "No Results Found";
  mainRowElement.appendChild(noResultsMessage);
};

function clearAlbumsAndAppendResults() {
  mainRowElement.innerHTML = "";

  if (searchedResults.length === 0) {
    createNoResultsMessage();
  }

  searchedResults.forEach(searchedResult => {
    generateAndAppendCard(searchedResult);
  });
};

searchButtonElement.addEventListener("click", () => {
  searchedResults.length = 0;
  searchByTitle();
  clearAlbumsAndAppendResults();
})

inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchedResults.length = 0;
        searchByTitle();
        clearAlbumsAndAppendResults();
    }
})

inputElement.addEventListener("input", () => {
    if (inputElement.value === '') {
        mainRowElement.innerHTML = "";
        albums.forEach(album => {
            generateAndAppendCard(album);
        })
    }
})