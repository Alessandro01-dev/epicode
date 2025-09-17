const courses = [
  {
    courseImgSrc: "./assets/course-graphql.jpg",
    courseImgAlt: "GraphQL course",
    title: "GraphQL: introduction to graphQL for beginners",
    length: "2h 40m",
    difficulty: "Advance",
    rating: "2.5",
    numberOfRatings: "1,500",
    discountedPrice: "$500",
    oldPrice: "$600",
    teacherProfilePictureSrc: "./assets/avatar-5.jpg",
    teacherProfilePictureAlt: "Brooklyn Simmons profile picture",
    teacherName: "Brooklyn Simmons",
  },
];

const coursesCardsContainerElement = document.querySelector(".courses-cards-container");

function generateAndAppendCards(course) {

  const courseCardElement = document.createElement("div");
  courseCardElement.classList.add("card", "course-card");
  coursesCardsContainerElement.appendChild(courseCardElement);

  const courseImgElement = document.createElement("img");
  courseImgElement.classList.add("card-img-top");
  courseImgElement.src = course.courseImgSrc;
  courseImgElement.alt = course.courseImgAlt;
  courseCardElement.appendChild(courseImgElement);

  const courseCardBodyElement = document.createElement("div");
  courseCardBodyElement.classList.add("card-body");
  courseCardElement.appendChild(courseCardBodyElement);

  const cardBodyContainerElement = document.createElement("div");
  cardBodyContainerElement.classList.add("d-flex", "flex-column", "gap-3");
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
  difficultyCourseIconElement.classList.add("bi", "bi-reception-4");
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

  const ratingCourseFirstParagraphElement = document.createElement("p");
  ratingCourseFirstParagraphElement.classList.add("m-0");
  ratingCourseFirstParagraphElement.innerText = course.rating;
  ratingCourseContainerElement.appendChild(ratingCourseFirstParagraphElement);

  const ratingCourseSecondParagraphElement = document.createElement("p");
  ratingCourseSecondParagraphElement.classList.add("m-0");
  ratingCourseSecondParagraphElement.innerText = `(${course.numberOfRatings})`;
  ratingCourseContainerElement.appendChild(ratingCourseSecondParagraphElement);

  const coursePriceContainerElement = document.createElement("div");
  coursePriceContainerElement.classList.add("d-flex", "align-items-center", "gap-1", "course-price-container");
  cardBodyContainerElement.appendChild(coursePriceContainerElement);

  const courseDiscountedPriceElement = document.createElement("p");
  courseDiscountedPriceElement.innerText = course.discountedPrice;
  coursePriceContainerElement.appendChild(courseDiscountedPriceElement);

  const courseOldPriceElement = document.createElement("p");
  courseOldPriceElement.innerText = course.oldPrice;
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

}

courses.forEach(course => {
  generateAndAppendCards(course)
})