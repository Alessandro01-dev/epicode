const movies = [
  {
    imgSrc: "https://gamelegends.it/wp-content/uploads/2017/10/starnger-things-2.jpg",
    imgAlt: "Stranger Things",
    title: "Stranger Things",
    genre: "Science fiction",
    year: "2016",
    description: "A group of kids in 1980s Indiana encounter secret government experiments and a supernatural alternate dimension called the Upside Down."
  },
  {
    imgSrc: "https://unavitadacinefilo.com/wp-content/uploads/2018/05/himym.jpg",
    imgAlt: "How I Met Your Mother",
    title: "How I Met Your Mother",
    genre: "Sitcom",
    year: "2005",
    description: "Ted Mosby narrates the long, comedic story of how he met the mother of his children, following his circle of friends in New York City."
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_Vle10GXvb1c-1irR_MrlvbkjCCGB0uDGA&s",
    imgAlt: "My Next Guest, David Letterman",
    title: "My Next Guest Needs No Introduction with David Letterman",
    genre: "Talk show",
    year: "2018",
    description: "David Letterman interviews one high-profile guest per episode in long-form conversations that take place in studio and on location."
  },
  {
    imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUjszGh751A2Qv0FAIdj7Ew4HW4AR50ktpTLbOeSnZT4ozEMw6ChEgySTFKKOLIzjT35Zj8aSnNLD31CzX21uP9B-E95gqD9-avzZksoK3T4UVafrjXSFnScwWydEvAQydqAwbjAXlMdHN/s1600/brooklyn-nine-nine-poster.jpg",
    imgAlt: "Brooklyn Nine-Nine",
    title: "Brooklyn Nine-Nine",
    genre: "Sitcom",
    year: "2013",
    description: "A lovable ensemble of detectives at the 99th Precinct balances silly humor with heartfelt stories while solving crimes in Brooklyn."
  },
  {
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/df/TheLastCzars.jpeg",
    imgAlt: "The Last Czars",
    title: "The Last Czars",
    genre: "Historical",
    year: "2019",
    description: "A hybrid documentary-drama that chronicles the decline of the Romanov dynasty and the Russian Revolution."
  },
  {
    imgSrc: "https://images.everyeye.it/img-notizie/disponibili-netflix-stagioni-de-principe-bel-air-will-smith-v5-386137.jpg",
    imgAlt: "The Fresh Prince of Bel-Air",
    title: "The Fresh Prince of Bel-Air",
    genre: "Comedy",
    year: "1990",
    description: "A streetwise teenager from Philadelphia is sent to live with his wealthy relatives in Bel-Air, producing culture-clash comedy and family moments."
  },
  {
    imgSrc: "https://i.ytimg.com/vi/iN_DZ5vDz6U/maxresdefault.jpg",
    imgAlt: "Black Mirror",
    title: "Black Mirror",
    genre: "Anthology",
    year: "2011",
    description: "An anthology series exploring dark, satirical tales about modern society and the unintended consequences of technology."
  },
  {
    imgSrc: "https://decider.com/wp-content/uploads/2019/01/COMEDIANS-OF-THE-WORLD-NETFLIX.jpg?quality=75&strip=all&w=978&h=652&crop=1",
    imgAlt: "Comedians of the World",
    title: "Comedians of the World",
    genre: "Stand-up comedy",
    year: "2019",
    description: "A Netflix collection featuring 47 comedians from around the globe performing half-hour stand-up sets."
  },
  {
    imgSrc: "https://i.ytimg.com/vi/ZA2ncQGomXE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCTEp1uvdAePTxzvcQmQjuGF019Zw",
    imgAlt: "Unbreakable Kimmy Schmidt",
    title: "Unbreakable Kimmy Schmidt",
    genre: "Comedy",
    year: "2015",
    description: "After being rescued from a doomsday cult, Kimmy moves to New York City to rebuild her life with relentless optimism and oddball humor."
  },
  {
    imgSrc: "https://i.ytimg.com/vi/ADOzQoNMl-g/mqdefault.jpg",
    imgAlt: "Dave Chappelle",
    title: "Dave Chappelle",
    genre: "Stand-up comedy",
    year: "2017",
    description: "Stand-up comedian Dave Chappelle is known for his incisive, often provocative comedy specials and sketch work spanning multiple decades."
  },
  {
    imgSrc: "https://i.ytimg.com/vi/RVm0Iwr5I3c/maxresdefault.jpg",
    imgAlt: "Dave Chapelle Equanimity & The Bird Revelation",
    title: "Dave Chappelle: Equanimity & The Bird Revelation",
    genre: "Stand-up comedy",
    year: "2017",
    description: "Two interrelated stand-up specials showcasing Chappelle's reflections on fame, society, and personal life."
  },
  {
    imgSrc: "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeRTzTwuHYOTlHYho9xiHwUIZ_IRNcjpFXuKRu9aFdfGw69-14JExSBa4P6bn5eW4rr0YNHbVWgErLGoi6K61cU8JWCh.jpg?r=fe3",
    imgAlt: "The IT Crowd",
    title: "The IT Crowd",
    genre: "Sitcom",
    year: "2006",
    description: "A British sitcom about the socially awkward IT department staff and their hapless interactions with the rest of a large corporation."
  },
  {
    imgSrc: "https://occ-0-299-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSDj4mamrqQlsNyTLSNoIhG1ugoqbXSFSmTxeek0Y2fgRCg2ELojgClWEQTXURHfDYBjKUCgEVTXnfqa4OnMP9tt0W6pxWr9ZvPLI5iVpBfyh3Mtr_3l.jpg?r=f20",
    imgAlt: "The Chef Show",
    title: "The Chef Show",
    genre: "Cooking show",
    year: "2019",
    description: "Jon Favreau and chef Roy Choi explore food, cooking, and conversations with chefs and celebrity guests."
  },
  {
    imgSrc: "https://preview.redd.it/request-did-you-enjoy-dead-to-me-v0-n0vai151to5a1.png?width=810&format=png&auto=webp&s=067f8864fbb0919def1f6ea0544fe5407024dc99",
    imgAlt: "Dead to Me",
    title: "Dead to Me",
    genre: "Black comedy",
    year: "2019",
    description: "A darkly comic series about a grieving widow and an eccentric woman who form a complicated friendship with secrets and twists."
  },
  {
    imgSrc: "https://ntvb.tmsimg.com/assets/p16848351_b_h11_aa.jpg?w=960&h=540",
    imgAlt: "Mr. Iglesias",
    title: "Mr. Iglesias",
    genre: "Sitcom",
    year: "2019",
    description: "Comedian Gabriel Iglesias plays a good-natured high school teacher helping underperforming but gifted students at his alma mater."
  },
  {
    imgSrc: "https://www.sololibri.net/local/cache-gd2/c7/cc844cfebc4ef672b03f4ed276e3c0.jpg?1737627106",
    imgAlt: "Tales of The City",
    title: "Tales of the City",
    genre: "Drama",
    year: "2019",
    description: "A modern continuation of Armistead Maupin's stories about an eccentric cast in San Francisco, focusing on community and identity."
  },
  {
    imgSrc: "https://resizing.flixster.com/jK8vv61RZCENi4ojvXvjMUg9R6U=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15203974_b_h8_aa.jpg",
    imgAlt: "The Standups",
    title: "The Standups",
    genre: "Stand-up",
    year: "2017",
    description: "A Netflix series of 30-minute stand-up specials spotlighting up-and-coming comedians."
  },
  {
    imgSrc: "https://i.ytimg.com/vi/HNOGQSkDDqo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBXFxYzniDapqeMPW4SHX3rh4wDyQ",
    imgAlt: "When They See Us",
    title: "When They See Us",
    genre: "Drama",
    year: "2019",
    description: "Ava DuVernay's dramatization of the Central Park Five case, following five teens who were wrongfully accused and the aftermath of their convictions."
  }
];

const trendingNowSwiperWrapperElement = document.querySelector(".trending-now-swiper-wrapper");
const watchItAgainSwiperWrapperElement = document.querySelector(".watch-it-again-swiper-wrapper");
const newReleasesSwiperWrapperElement = document.querySelector(".new-releases-swiper-wrapper");

function createSwiperSlide(movie, swiperWrapperElement) {
  const swiperSlideElement = document.createElement("div");
  swiperSlideElement.classList.add("swiper-slide", "d-flex", "justify-content-center", "align-items-contain");
  swiperWrapperElement.appendChild(swiperSlideElement);

  const movieCardElement = document.createElement("div");
  movieCardElement.classList.add("movie-card");
  swiperSlideElement.appendChild(movieCardElement);

  const swiperImgElement = document.createElement("img");
  swiperImgElement.classList.add("object-fit-cover", "object-fit-md-contain");
  swiperImgElement.src = movie.imgSrc;
  swiperImgElement.alt = movie.imgAlt;
  movieCardElement.appendChild(swiperImgElement);

  const movieOverlayContainerElement = document.createElement("div");
  movieOverlayContainerElement.classList.add("movie-overlay-container");
  movieCardElement.appendChild(movieOverlayContainerElement);

  const movieTitleElement = document.createElement("h3");
  movieTitleElement.classList.add("ol-movie-title");
  movieTitleElement.innerText = movie.title;
  movieOverlayContainerElement.appendChild(movieTitleElement);

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.classList.add("ol-movie-description");
  movieDescriptionElement.innerText = movie.description;
  movieOverlayContainerElement.appendChild(movieDescriptionElement);

  const yearAndGenreContainerElement = document.createElement("div");
  yearAndGenreContainerElement.classList.add("d-flex", "gap-3", "justify-content-between", "align-items-center");
  movieOverlayContainerElement.appendChild(yearAndGenreContainerElement);

  const movieYearElement = document.createElement("div");
  movieYearElement.classList.add("ol-movie-year");
  movieYearElement.innerText = movie.year;
  yearAndGenreContainerElement.appendChild(movieYearElement);

  const movieGenreElement = document.createElement("div");
  movieGenreElement.classList.add("badge", "text-bg-secondary", "ol-movie-genre");
  movieGenreElement.innerText = movie.genre;
  yearAndGenreContainerElement.appendChild(movieGenreElement);

}

movies.forEach(movie => {
  createSwiperSlide(movie, trendingNowSwiperWrapperElement);
});

movies.forEach(movie => {
  createSwiperSlide(movie, watchItAgainSwiperWrapperElement);
});

movies.forEach(movie => {
  createSwiperSlide(movie, newReleasesSwiperWrapperElement);
});

const trendingNowSwiper = new Swiper('.trending-now-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: "auto",
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 6.3,
      spaceBetween: 10
    },
  }
});

const watchItAgainSwiper = new Swiper('.watch-it-again-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: "auto",
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 6.3,
      spaceBetween: 10
    },
  }
});

const newReleasesSwiper = new Swiper('.new-releases-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: "auto",
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 6.3,
      spaceBetween: 10
    },
  }
});

const trendingNowTitleRowElement = document.querySelector(".trending-now-title-row");
const trendingNowSwiperRowElement = document.querySelector(".trending-now-swiper-row");
const watchItAgainTitleRowElement = document.querySelector(".watch-it-again-title-row");
const watchItAgainSwiperRowElement = document.querySelector(".watch-it-again-swiper-row");
const newReleasesTitleRowElement = document.querySelector(".new-releases-title-row");
const newReleasesSwiperRowElement = document.querySelector(".new-releases-swiper-row");

function addShowClassToElement(element) {
  document.addEventListener("DOMContentLoaded", () => {
    element.classList.add("show-element")
  })
}

addShowClassToElement(trendingNowTitleRowElement);
addShowClassToElement(trendingNowSwiperRowElement);
addShowClassToElement(watchItAgainTitleRowElement);
addShowClassToElement(watchItAgainSwiperRowElement);

/* 
addShowClassToElement(newReleasesTitleRowElement);
addShowClassToElement(newReleasesSwiperRowElement);
*/ 
// trying IntersectionObserve API for these elements

const observerOptions = {
  root: null, // use the viewport as the container
  rootMargin: "0px",
  threshold: 0.5, // trigger when 50% of the element is visible
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-element");
      observer.unobserve(entry.target); // stop observing once the animation runs
    }
  });
}, observerOptions);

observer.observe(newReleasesTitleRowElement);
observer.observe(newReleasesSwiperRowElement);