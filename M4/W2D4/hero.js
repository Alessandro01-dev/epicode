const heroSlides = [
  {
    imgSrc: "https://assets.thalia.media/img/cms/b2d4040c7e85cd284d3a30cb60da2f698856b56c.jpg",
    imgAlt: "books on the table",
    textTitle: "Adventskalender für Gross & Klein",
    textButton: "Nur solange der Vorrat reicht",
  },
  {
    imgSrc: "https://assets.thalia.media/img/cms/1a4cb88b8a2a0711aac799d46be20c93a772ad45.jpg",
    imgAlt: "candidates for literary prize",
    textTitle: "Schweizer Buchpreis Die Nominierten im Gespräch",
    textButton: "Hier entdecken",
  },
  {
    imgSrc: "https://assets.thalia.media/img/cms/66f3cd410a3825066f6b7e10e02498a7a4bf3f1a.jpg",
    imgAlt: "smiling people",
    textTitle: "Zeit für einenSpieleabend",
    textButton: "Jetzt stöbern",
  },
  {
    imgSrc: "https://assets.thalia.media/img/cms/4b5ea6b0a95bbcdd602df291e4ee87050b9fa748.jpg",
    imgAlt: "László Krasznahorkai books",
    textTitle: "Literturnobelpreis László Krasznahorkai",
    textButton: "Entdecken Sie seine Werke",
  },
  {
    imgSrc: "https://assets.thalia.media/img/cms/c4ff0686f8ea9a4a49e3b5334daa550498de3ce6.jpg",
    imgAlt: "little girl playing",
    textTitle: "Die Toniebox<sup>&reg;</sup> 2 mit Tonieplay<sup>&reg;</sup>",
    textButton: "Jetzt entdecken",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper")


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

const createHeroSwiperSlide = (slide, container) => {

  const swiperSlide = document.createElement("div");
  swiperSlide.setAttribute("class", "swiper-slide position-relative");
  container.appendChild(swiperSlide);

  const swiperSlideImg = document.createElement("img");
  swiperSlideImg.src = slide.imgSrc;
  swiperSlideImg.alt = slide.imgAlt;
  swiperSlide.appendChild(swiperSlideImg);

  const swiperSlideInfoContainer = document.createElement("div");
  swiperSlideInfoContainer.setAttribute("class", "hero-info-swiper d-flex flex-column align-items-start position-absolute");
  swiperSlide.appendChild(swiperSlideInfoContainer);

  const swiperSlideInfoTitle = document.createElement("h2");
  swiperSlideInfoTitle.innerHTML = slide.textTitle;
  swiperSlideInfoContainer.appendChild(swiperSlideInfoTitle);

  const swiperSlideInfoBtn = document.createElement("button");
  swiperSlideInfoBtn.innerText = slide.textButton;
  swiperSlideInfoContainer.appendChild(swiperSlideInfoBtn);

};

heroSlides.forEach(heroSlide => {
  createHeroSwiperSlide(heroSlide, swiperWrapper);
});