const jumbotronDestinations = [
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586838587885-MU6QXL9T1MRL0A2GJMQT/Ahu+Tongariki+2.jpg?format=2500w",
    imgAlt: "Lake Louise in Banff National Park, Alberta, Canada Paul Zizka photography",
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586838570486-2ZN6RF76TJ5M42GHQ8D9/PZ_04042017_03285.jpg?format=1000w",
    imgAlt: "Paul Zizka picture",
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586838584384-0J6CUY120AIHY2YZ9MY7/closer3_1.jpg?format=750w",
    imgAlt: "Paul Zizka picture",
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586838566386-5AMTDGY8MKTVKIGHQNQ5/PZ_20180615_08303.jpg?format=1000w",
    imgAlt: "Paul Zizka picture",
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586838560763-823V2JPBL8YZZXDD3VLL/PZ_20180617_08212.jpg?format=1000w",
    imgAlt: "Paul Zizka picture",
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586838554722-C4N7DFV5REITBZLFVHUT/PZ_20180618_08198.jpg?format=1000w",
    imgAlt: "Paul Zizka picture",
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5d51daa62b8b280001d64e57/1586832747040-XHQAY47RQQLNC58N885T/NatGeoAurora+%281%29.jpg?format=1000w",
    imgAlt: "Paul Zizka picture",
  },
]

const heroSwiperWrapperElement = document.querySelector(".hero-swiper-wrapper");

function generateSlides(picture) {
  
  const swiperSlideElement = document.createElement("div");
  swiperSlideElement.classList.add("swiper-slide");
  heroSwiperWrapperElement.appendChild(swiperSlideElement);

  const swiperSlideImgElement = document.createElement("img");
  swiperSlideImgElement.classList.add("d-block", "w-100");
  swiperSlideImgElement.src = picture.imgSrc;
  swiperSlideImgElement.alt = picture.imgAlt;
  swiperSlideElement.appendChild(swiperSlideImgElement);

}

jumbotronDestinations.forEach(jumbotronDestination => {
  generateSlides(jumbotronDestination);
});


const swiper = new Swiper('.swiper', {

  autoplay: true,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});