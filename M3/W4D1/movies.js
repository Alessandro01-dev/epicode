movies = [
  {
    imgSrc: "https://gamelegends.it/wp-content/uploads/2017/10/starnger-things-2.jpg",
    imgAlt: "Stranger Things",
  },
  {
    imgSrc: "https://unavitadacinefilo.com/wp-content/uploads/2018/05/himym.jpg",
    imgAlt: "How I Met Your Mother",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_Vle10GXvb1c-1irR_MrlvbkjCCGB0uDGA&s",
    imgAlt: "My Next Guest, David Letterman",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/6297a94744aaf2faece5d23129e74a54e4e27afb0d20e2e2313260129b8521c0.jpg",
    imgAlt: "Brooklyn Nine-Nine",
  },
  {
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/df/TheLastCzars.jpeg",
    imgAlt: "The Last Czar",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/4cb0e5b10febb6b1504f1d44a43aff7db9b07e83e8f2441d8bc563da5b0a4372.jpg",
    imgAlt: "The Fresh Prince",
  },
  {
    imgSrc: "https://i.ytimg.com/vi/iN_DZ5vDz6U/maxresdefault.jpg",
    imgAlt: "Black Mirror",
  },
  {
    imgSrc: "https://decider.com/wp-content/uploads/2019/01/COMEDIANS-OF-THE-WORLD-NETFLIX.jpg?quality=75&strip=all&w=978&h=652&crop=1",
    imgAlt: "Comedians of the World",
  },
  {
    imgSrc: "https://i.ytimg.com/vi/ZA2ncQGomXE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCTEp1uvdAePTxzvcQmQjuGF019Zw",
    imgAlt: "Unbreakable Kimmy Schmidt",
  },
  {
    imgSrc: "https://i.ytimg.com/vi/ADOzQoNMl-g/mqdefault.jpg",
    imgAlt: "Dave Chapelle",
  },
  {
    imgSrc: "https://i.ytimg.com/vi/RVm0Iwr5I3c/maxresdefault.jpg",
    imgAlt: "Dave Chapelle Equanimity & The Bird Revelation"
  },
  {
    imgSrc: "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeRTzTwuHYOTlHYho9xiHwUIZ_IRNcjpFXuKRu9aFdfGw69-14JExSBa4P6bn5eW4rr0YNHbVWgErLGoi6K61cU8JWCh.jpg?r=fe3",
    imgAlt: "The IT Crowd"
  },
  {
    imgSrc: "https://occ-0-299-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSDj4mamrqQlsNyTLSNoIhG1ugoqbXSFSmTxeek0Y2fgRCg2ELojgClWEQTXURHfDYBjKUCgEVTXnfqa4OnMP9tt0W6pxWr9ZvPLI5iVpBfyh3Mtr_3l.jpg?r=f20",
    imgAlt: "The Chef Show"
  },
  {
    imgSrc: "https://preview.redd.it/request-did-you-enjoy-dead-to-me-v0-n0vai151to5a1.png?width=810&format=png&auto=webp&s=067f8864fbb0919def1f6ea0544fe5407024dc99",
    imgAlt: "Dead to Me"
  },
  {
    imgSrc: "https://ntvb.tmsimg.com/assets/p16848351_b_h11_aa.jpg?w=960&h=540",
    imgAlt: "Mr. Iglesias"
  },
  {
    imgSrc: "https://www.sololibri.net/local/cache-gd2/c7/cc844cfebc4ef672b03f4ed276e3c0.jpg?1737627106",
    imgAlt: "Tales of The City"
  },
  {
    imgSrc: "https://resizing.flixster.com/jK8vv61RZCENi4ojvXvjMUg9R6U=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15203974_b_h8_aa.jpg",
    imgAlt: "The Standups"
  },
  {
    imgSrc: "https://i.ytimg.com/vi/HNOGQSkDDqo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBXFxYzniDapqeMPW4SHX3rh4wDyQ",
    imgAlt: "When They See Us"
  },
];

const trendingNowSwiperWrapperElement = document.querySelector(".trending-now-swiper-wrapper");
const watchItAgainSwiperWrapperElement = document.querySelector(".watch-it-again-swiper-wrapper");
const newReleasesSwiperWrapperElement = document.querySelector(".new-releases-swiper-wrapper");

function createSwiperSlide(movie, swiperWrapperElement) {
  const swiperSlideElement = document.createElement("div");
  swiperSlideElement.classList.add("swiper-slide", "d-flex", "justify-content-center", "align-items-contain");
  swiperWrapperElement.appendChild(swiperSlideElement);

  const swiperImgElement = document.createElement("img");
  swiperImgElement.classList.add("object-fit-cover");
  swiperImgElement.src = movie.imgSrc;
  swiperImgElement.alt = movie.imgAlt;
  swiperSlideElement.appendChild(swiperImgElement);
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
  slidesPerView: 2.3,
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
  slidesPerView: 2.3,
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
  slidesPerView: 2.3,
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