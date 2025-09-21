const testimonials = [
  {
    name: "Sophie Martin",
    rating: "5.0",
    comment: "An unforgettable trip! Everything was perfectly organized, from the flights to the hotel. I can’t wait to book again.",
    travelExperienced: "The Essence of Santorini"
  },
  {
    name: "Luca Rossi",
    rating: "4.5",
    comment: "Great experience overall. The staff was very attentive and the excursions were well planned.",
    travelExperienced: "Venice Romantic Getaway"
  },
  {
    name: "Emily Johnson",
    rating: "5.0",
    comment: "Best vacation ever! The daily deal saved us a lot, and the destination was breathtaking.",
    travelExperienced: "Maldives Luxury Excape"
  },
  {
    name: "Carlos Alvarez",
    rating: "4.0",
    comment: "The booking process was smooth and the trip was memorable. A couple of small delays, but still amazing.",
    travelExperienced: "Barcelona Sun & Culture"
  },
  {
    name: "Anna Schmidt",
    rating: "4.5",
    comment: "Fantastic service and a dream destination. Highly recommended for stress-free travel planning!",
    travelExperienced: "Paris City Escape"
  },
  {
    name: "James Wilson",
    rating: "5.0",
    comment: "A flawless trip! From booking to the actual holiday, everything was seamless and enjoyable.",
    travelExperienced: "Dubai Luxury Stay"
  },
  {
    name: "Maria Silva",
    rating: "4.5",
    comment: "Beautiful destination and excellent service. The hotel exceeded my expectations.",
    travelExperienced: "Lisbon Coastal Charm"
  },
  {
    name: "Tom Becker",
    rating: "4.0",
    comment: "Good value for money and helpful staff. The excursions were a highlight!",
    travelExperienced: "Prague Cultural Tour"
  },
  {
    name: "Isabella Rossi",
    rating: "5.0",
    comment: "I felt like royalty! Every detail was carefully planned. Truly unforgettable.",
    travelExperienced: "Swiss Alps Explorer"
  },
  {
    name: "David Chen",
    rating: "4.5",
    comment: "Great mix of relaxation and adventure. Would definitely recommend to friends.",
    travelExperienced: "Bali Adventure"
  }
];

const testimonialsSwiperWrapperElement = document.querySelector(".testimonials-swiper .swiper-wrapper");

function generateTestimonialsCard(testimonial) {

  const testimonialSwiperSlideElement = document.createElement("div");
  testimonialSwiperSlideElement.classList.add("swiper-slide", "d-flex", "justify-content-center", "align-items-stretch", "h-100", "px-4");
  testimonialsSwiperWrapperElement.appendChild(testimonialSwiperSlideElement);

  const testimonialSlideContentElement = document.createElement("div");
  testimonialSlideContentElement.classList.add("d-flex", "flex-column", "justify-content-between", "testimonials-slide-content");
  testimonialSwiperSlideElement.appendChild(testimonialSlideContentElement);

  const testimonialSlideNameElement = document.createElement("h3");
  testimonialSlideNameElement.classList.add("align-self-start", "m-0");
  testimonialSlideNameElement.innerText = testimonial.name;
  testimonialSlideContentElement.appendChild(testimonialSlideNameElement);

  const ratingTravelContainerElement = document.createElement("div");
  ratingTravelContainerElement.classList.add("d-flex", "align-items-center", "gap-2", "rating-travel-container", "align-self-end");
  testimonialSlideContentElement.appendChild(ratingTravelContainerElement);

  const ratingTravelIconsContainerElement = document.createElement("div");
  ratingTravelIconsContainerElement.classList.add("d-flex");
  ratingTravelContainerElement.appendChild(ratingTravelIconsContainerElement);

  const testimonialRatingTravelFirstIconElement = document.createElement("i");
  testimonialRatingTravelFirstIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(testimonialRatingTravelFirstIconElement);

  const testimonialRatingTravelSecondIconElement = document.createElement("i");
  testimonialRatingTravelSecondIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(testimonialRatingTravelSecondIconElement);

  const testimonialRatingTravelThirdIconElement = document.createElement("i");
  testimonialRatingTravelThirdIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(testimonialRatingTravelThirdIconElement);

  const testimonialRatingTravelFourthIconElement = document.createElement("i");
  testimonialRatingTravelFourthIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(testimonialRatingTravelFourthIconElement);

  const testimonialRatingTravelFifthIconElement = document.createElement("i");
  testimonialRatingTravelFifthIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(testimonialRatingTravelFifthIconElement);

  const testimonialRatingTravelNumberElement = document.createElement("p");
  testimonialRatingTravelNumberElement.classList.add("m-0");
  testimonialRatingTravelNumberElement.innerText = testimonial.rating;
  ratingTravelContainerElement.appendChild(testimonialRatingTravelNumberElement);

  const testimonialSlideCommentElement = document.createElement("p");
  testimonialSlideCommentElement.classList.add("text-center", "m-0");
  testimonialSlideCommentElement.innerText = testimonial.comment;
  testimonialSlideContentElement.appendChild(testimonialSlideCommentElement);

  const testimonialSlideTravelExperiencedElement = document.createElement("p");
  testimonialSlideTravelExperiencedElement.classList.add("align-self-end", "m-0");
  testimonialSlideTravelExperiencedElement.innerText = testimonial.travelExperienced;
  testimonialSlideContentElement.appendChild(testimonialSlideTravelExperiencedElement);

  fillStarsRatingAccordingToRatingNumber(testimonialRatingTravelNumberElement, testimonialRatingTravelFirstIconElement, testimonialRatingTravelSecondIconElement, testimonialRatingTravelThirdIconElement, testimonialRatingTravelFourthIconElement, testimonialRatingTravelFifthIconElement);

};

testimonials.forEach(testimonial => {
  generateTestimonialsCard(testimonial);
});

const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});