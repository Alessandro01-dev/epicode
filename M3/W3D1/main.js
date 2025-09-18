const courses = [
  {
    courseImgSrc: "./assets/course-graphql.jpg",
    courseImgAlt: "GraphQL course picture",
    title: "GraphQL: introduction to graphQL for beginners",
    length: "2h 40m",
    difficulty: "Advance",
    rating: "2.5",
    numberOfRatings: "1,500",
    discountedPrice: "500",
    oldPrice: "600",
    teacherProfilePictureSrc: "./assets/avatar-5.jpg",
    teacherProfilePictureAlt: "Brooklyn Simmons profile picture",
    teacherName: "Brooklyn Simmons",
  },
  {
    courseImgSrc: "./assets/course-javascript.jpg",
    courseImgAlt: "JavaScript course picture",
    title: "A Complete Beginner's Guide to Javascript",
    length: "4h 10m",
    difficulty: "Advance",
    rating: "3.5",
    numberOfRatings: "7,500",
    discountedPrice: "700",
    oldPrice: "850",
    teacherProfilePictureSrc: "./assets/avatar-1.jpg",
    teacherProfilePictureAlt: "Jenny Wilson profile picture",
    teacherName: "Jenny Wilson",
  },
  {
    courseImgSrc: "./assets/course-node.jpg",
    courseImgAlt: "Node.js course picture",
    title: "Beginning Node.js, Express & MongoDB Development",
    length: "2h 00m",
    difficulty: "Intermediate",
    rating: "4.0",
    numberOfRatings: "15,700",
    discountedPrice: "800",
    oldPrice: "950",
    teacherProfilePictureSrc: "./assets/avatar-3.jpg",
    teacherProfilePictureAlt: "Sina Ray profile picture",
    teacherName: "Sina Ray",
  },
  {
    courseImgSrc: "./assets/course-laravel.jpg",
    courseImgAlt: "Laravel course picture",
    title: "Laravel: The Ultimate Beginner's Guide to Learn",
    length: "1h 00m",
    difficulty: "Beginner",
    rating: "4.5",
    numberOfRatings: "2,500",
    discountedPrice: "170",
    oldPrice: "220",
    teacherProfilePictureSrc: "./assets/avatar-7.jpg",
    teacherProfilePictureAlt: "Sobo Rikhan profile picture",
    teacherName: "Sobo Rikhan",
  },
  {
    courseImgSrc: "./assets/course-html.jpg",
    courseImgAlt: "HTML course picture",
    title: "HTML Full Course - Build a Website Tutorial",
    length: "3h 16m",
    difficulty: "Beginner",
    rating: "3.0",
    numberOfRatings: "1,600",
    discountedPrice: "550",
    oldPrice: "700",
    teacherProfilePictureSrc: "./assets/avatar-8.jpg",
    teacherProfilePictureAlt: "Miston Wilson profile picture",
    teacherName: "Miston Wilson",
  },
  {
    courseImgSrc: "./assets/course-react.jpg",
    courseImgAlt: "React course picture",
    title: "How to easily create a website with React",
    length: "3h 55m",
    difficulty: "Advance",
    rating: "4.5",
    numberOfRatings: "1,500",
    discountedPrice: "600",
    oldPrice: "750",
    teacherProfilePictureSrc: "./assets/avatar-2.jpg",
    teacherProfilePictureAlt: "April Noms profile picture",
    teacherName: "April Noms",
  },
  {
    courseImgSrc: "./assets/course-gatsby.jpg",
    courseImgAlt: "Gatsby course picture",
    title: "Revolutionize how you build the web",
    length: "1h 46m",
    difficulty: "Intermediate",
    rating: "2.0",
    numberOfRatings: "16,500",
    discountedPrice: "800",
    oldPrice: "850",
    teacherProfilePictureSrc: "./assets/avatar-6.jpg",
    teacherProfilePictureAlt: "Jenny Wilson profile picture",
    teacherName: "Jenny Wilson",
  },
];

const FirstSwiperWrapperElement = document.querySelector(".first-swiper-wrapper");
const SecondSwiperWrapperElement = document.querySelector(".second-swiper-wrapper");
const ThirdSwiperWrapperElement = document.querySelector(".third-swiper-wrapper");


function generateCourseCards(course, swiperWrapper) {

  const swiperSlideElement = document.createElement("div");
  swiperSlideElement.classList.add("swiper-slide", "d-flex", "justify-content-center");
  swiperWrapper.appendChild(swiperSlideElement);

  const courseCardElement = document.createElement("div");
  courseCardElement.classList.add("card", "course-card");
  swiperSlideElement.appendChild(courseCardElement);

  const courseImgElement = document.createElement("img");
  courseImgElement.classList.add("card-img-top");
  courseImgElement.src = course.courseImgSrc;
  courseImgElement.alt = course.courseImgAlt;
  courseCardElement.appendChild(courseImgElement);

  const courseCardBodyElement = document.createElement("div");
  courseCardBodyElement.classList.add("card-body");
  courseCardElement.appendChild(courseCardBodyElement);

  const cardBodyContainerElement = document.createElement("div");
  cardBodyContainerElement.classList.add("d-flex", "flex-column", "gap-2");
  courseCardBodyElement.appendChild(cardBodyContainerElement);

  const courseTitleElement = document.createElement("h5");
  courseTitleElement.classList.add("card-course-title", "m-0");
  courseTitleElement.innerText = course.title;
  cardBodyContainerElement.appendChild(courseTitleElement);

  const lengthAndLevelCourseContainerElement = document.createElement("div");
  lengthAndLevelCourseContainerElement.classList.add("d-flex", "gap-3", "length-and-level-course-container");
  cardBodyContainerElement.appendChild(lengthAndLevelCourseContainerElement);

  const lengthCourseContainerElement = document.createElement("div");
  lengthCourseContainerElement.classList.add("d-flex", "align-items-center", "gap-1");
  lengthAndLevelCourseContainerElement.appendChild(lengthCourseContainerElement);

  const lengthCourseIconContainerElement = document.createElement("div");
  lengthCourseContainerElement.appendChild(lengthCourseIconContainerElement);

  const lengthCourseIconElement = document.createElement("i");
  lengthCourseIconElement.classList.add("bi", "bi-clock");
  lengthCourseIconContainerElement.appendChild(lengthCourseIconElement);

  const lengthCourseParagraphElement = document.createElement("p");
  lengthCourseParagraphElement.classList.add("m-0");
  lengthCourseParagraphElement.innerText = course.length;
  lengthCourseContainerElement.appendChild(lengthCourseParagraphElement);

  const difficultyCourseContainerElement = document.createElement("div");
  difficultyCourseContainerElement.classList.add("d-flex", "align-items-center", "gap-1");
  lengthAndLevelCourseContainerElement.appendChild(difficultyCourseContainerElement);

  const difficultyCourseIconContainerElement = document.createElement("div");
  difficultyCourseContainerElement.appendChild(difficultyCourseIconContainerElement);

  const difficultyCourseIconElement = document.createElement("i");
  difficultyCourseIconElement.classList.add("bi", "bi-reception-1");
  difficultyCourseIconContainerElement.appendChild(difficultyCourseIconElement);

  const difficultyCourseParagraphElement = document.createElement("p");
  difficultyCourseParagraphElement.classList.add("m-0");
  difficultyCourseParagraphElement.innerText = course.difficulty;
  difficultyCourseContainerElement.appendChild(difficultyCourseParagraphElement);

  const ratingCourseContainerElement = document.createElement("div");
  ratingCourseContainerElement.classList.add("d-flex", "align-items-center", "gap-2", "rating-course-container");
  cardBodyContainerElement.appendChild(ratingCourseContainerElement);

  const ratingCourseIconsContainerElement = document.createElement("div");
  ratingCourseIconsContainerElement.classList.add("d-flex", "gap-1");
  ratingCourseContainerElement.appendChild(ratingCourseIconsContainerElement);

  const ratingCourseFirstIconElement = document.createElement("i");
  ratingCourseFirstIconElement.classList.add("bi", "bi-star");
  ratingCourseIconsContainerElement.appendChild(ratingCourseFirstIconElement);

  const ratingCourseSecondIconElement = document.createElement("i");
  ratingCourseSecondIconElement.classList.add("bi", "bi-star");
  ratingCourseIconsContainerElement.appendChild(ratingCourseSecondIconElement);

  const ratingCourseThirdIconElement = document.createElement("i");
  ratingCourseThirdIconElement.classList.add("bi", "bi-star");
  ratingCourseIconsContainerElement.appendChild(ratingCourseThirdIconElement);

  const ratingCourseFourthIconElement = document.createElement("i");
  ratingCourseFourthIconElement.classList.add("bi", "bi-star");
  ratingCourseIconsContainerElement.appendChild(ratingCourseFourthIconElement);

  const ratingCourseFifthIconElement = document.createElement("i");
  ratingCourseFifthIconElement.classList.add("bi", "bi-star");
  ratingCourseIconsContainerElement.appendChild(ratingCourseFifthIconElement);

  const ratingCourseNumberElement = document.createElement("p");
  ratingCourseNumberElement.classList.add("m-0");
  ratingCourseNumberElement.innerText = course.rating;
  ratingCourseContainerElement.appendChild(ratingCourseNumberElement);

  const ratingCourseSecondParagraphElement = document.createElement("p");
  ratingCourseSecondParagraphElement.classList.add("m-0");
  ratingCourseSecondParagraphElement.innerText = `(${course.numberOfRatings})`;
  ratingCourseContainerElement.appendChild(ratingCourseSecondParagraphElement);

  const coursePriceContainerElement = document.createElement("div");
  coursePriceContainerElement.classList.add("d-flex", "align-items-center", "gap-1", "course-price-container");
  cardBodyContainerElement.appendChild(coursePriceContainerElement);

  const courseDiscountedPriceElement = document.createElement("p");
  courseDiscountedPriceElement.innerText = `$${course.discountedPrice}`;
  coursePriceContainerElement.appendChild(courseDiscountedPriceElement);

  const courseOldPriceElement = document.createElement("p");
  courseOldPriceElement.innerText = `$${course.oldPrice}`;
  coursePriceContainerElement.appendChild(courseOldPriceElement);

  const cardFooterElement = document.createElement("div");
  cardFooterElement.classList.add("card-footer", "bg-white");
  courseCardElement.appendChild(cardFooterElement);

  const cardFooterContainerElement = document.createElement("div");
  cardFooterContainerElement.classList.add("d-flex", "align-items-center", "justify-content-between");
  cardFooterElement.appendChild(cardFooterContainerElement);

  const cardFooterLeftSectionElement = document.createElement("div");
  cardFooterLeftSectionElement.classList.add("d-flex", "align-items-center", "gap-2");
  cardFooterContainerElement.appendChild(cardFooterLeftSectionElement);

  const avatarCardFooterContainerElement = document.createElement("div");
  avatarCardFooterContainerElement.classList.add("avatar-card-footer-container");
  cardFooterLeftSectionElement.appendChild(avatarCardFooterContainerElement);

  const avatarCardFooterImgElement = document.createElement("img");
  avatarCardFooterImgElement.classList.add("w-100");
  avatarCardFooterImgElement.src = course.teacherProfilePictureSrc;
  avatarCardFooterImgElement.alt = course.teacherProfilePictureAlt;
  avatarCardFooterContainerElement.appendChild(avatarCardFooterImgElement);

  const teacherNameElement = document.createElement("p");
  teacherNameElement.classList.add("m-0");
  teacherNameElement.innerText = course.teacherName;
  cardFooterLeftSectionElement.appendChild(teacherNameElement);

  const cardFooterIconContainerElement = document.createElement("div");
  cardFooterContainerElement.appendChild(cardFooterIconContainerElement);

  const cardFooterIconElement = document.createElement("i");
  cardFooterIconElement.classList.add("bi", "bi-bookmark");
  cardFooterIconContainerElement.appendChild(cardFooterIconElement);

  fillStarsRatingAccordingToRatingNumber(ratingCourseNumberElement, ratingCourseFirstIconElement, ratingCourseSecondIconElement, ratingCourseThirdIconElement, ratingCourseFourthIconElement, ratingCourseFifthIconElement);

  fillBarChartAccordingToDifficultyParagraph(difficultyCourseParagraphElement, difficultyCourseIconElement);

}

function fillStarsRatingAccordingToRatingNumber(num, firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
  if (num.innerText === "0.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-half");
  } else if (num.innerText === "1.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
  } else if (num.innerText === "1.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-half");
  } else if (num.innerText === "2.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
  } else if (num.innerText === "2.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-half");
  } else if (num.innerText === "3.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
  } else if (num.innerText === "3.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-half");
  } else if (num.innerText === "4.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-fill");
  } else if (num.innerText === "4.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-fill");
    fifthStar.classList.remove("bi-star");
    fifthStar.classList.add("bi-star-half");
  } else if (num.innerText === "5.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-half");
    fifthStar.classList.remove("bi-star");
    fifthStar.classList.add("bi-star-fill");
  }
}

function fillBarChartAccordingToDifficultyParagraph(level, icon) {
  if (level.innerText === "Beginner") {
    icon.classList.remove("bi-reception-1");
    icon.classList.add("bi-reception-2");
  } else if (level.innerText === "Intermediate") {
    icon.classList.remove("bi-reception-1");
    icon.classList.add("bi-reception-3");
  } else if (level.innerText === "Advance") {
    icon.classList.remove("bi-reception-1");
    icon.classList.add("bi-reception-4");
  }
};

courses.forEach(course => {
  generateCourseCards(course, FirstSwiperWrapperElement);
  generateCourseCards(course, SecondSwiperWrapperElement);
  generateCourseCards(course, ThirdSwiperWrapperElement);
})

const firstSwiper = new Swiper('.first-swiper', {

  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  slideShadows: true,
  grabCursor: true,

  navigation: {
    nextEl: '.first-swiper-arrow-right',
    prevEl: '.first-swiper-arrow-left',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

const secondSwiper = new Swiper('.second-swiper', {

  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  slideShadows: true,
  grabCursor: true,

  navigation: {
    nextEl: '.second-swiper-arrow-right',
    prevEl: '.second-swiper-arrow-left',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

const thirdSwiper = new Swiper('.third-swiper', {

  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  slideShadows: true,
  grabCursor: true,

  navigation: {
    nextEl: '.third-swiper-arrow-right',
    prevEl: '.third-swiper-arrow-left',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});