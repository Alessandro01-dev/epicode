const romeRooms = [
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/ab947823-a193-4e81-8303-cf970f8abd4a.jpg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Appartamento · San Salvario",
    roomDate: "20-22 oct",
    roomHost: "Host privato",
    roomPrice: "14€ per 2 notti",
    roomRating: "★ 4,76",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1492065800186557669/original/f2d82934-65cf-47e2-b142-2aa93a7b9d8a.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Roma",
    roomDate: "12-14 oct",
    roomHost: "Host privato",
    roomPrice: "26€ per 2 notti",
    roomRating: "★ 3,46",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/2ed4fb7d-1135-4b17-b8ac-efca8a610d5f.jpg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Ciampino",
    roomDate: "15-17 nov",
    roomHost: "Host privato",
    roomPrice: "98€ per 2 notti",
    roomRating: "★ 4,52",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjM3MzY4MjAzOTAxNzcxNTYz/original/9f434ad6-0b47-49cc-8150-7c5922d298b6.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Casa vacanza · Roma",
    roomDate: "03-05 oct",
    roomHost: "Host professionista",
    roomPrice: "74€ per 2 notti",
    roomRating: "★ 4,95",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1358142750492175350/original/55ac83bc-b31e-47f5-98eb-339e2f9fdb3f.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Stanza · Roma",
    roomDate: "10-12 oct",
    roomHost: "Host privato",
    roomPrice: "35€ per 2 notti",
    roomRating: "★ 3,76",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1249865826204295449/original/9d872fc3-4eb0-48c0-83b3-3f7e13356aea.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Minicase · Rocca di Papa",
    roomDate: "02-04 oct",
    roomHost: "Host privato",
    roomPrice: "164€ per 2 notti",
    roomRating: "★ 4,98",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0NzIwMzU2NDkwNzg3NjMyOQ%3D%3D/original/c5b8b391-cf0e-4a00-9cc2-dcb37c5b2bcc.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Roma",
    roomDate: "13-15 oct",
    roomHost: "Host professionista",
    roomPrice: "99€ per 2 notti",
    roomRating: "★ 4,16",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-987483511751490474/original/ae72a2e2-cf20-4c71-a458-ffd78cb8c71b.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Minicase · Rocca di Papa",
    roomDate: "02-04 oct",
    roomHost: "Host privato",
    roomPrice: "164€ per 2 notti",
    roomRating: "★ 4,98",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1214435263046326720/original/0119c590-14f0-48f4-91da-aada6e4ad59d.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Roma",
    roomDate: "13-15 oct",
    roomHost: "Host professionista",
    roomPrice: "99€ per 2 notti",
    roomRating: "★ 4,16",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-971855431552920572/original/35f825b1-d6ee-4f07-899c-d41d85317c77.jpeg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Stanza · Roma",
    roomDate: "17-19 oct",
    roomHost: "Host privato",
    roomPrice: "64€ per 2 notti",
    roomRating: "★ 3,98",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1159335536072500127/original/e0398ba8-8430-44f1-8341-bec9b0ee82fc.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Ciampino",
    roomDate: "23-25 oct",
    roomHost: "Host professionista",
    roomPrice: "54€ per 2 notti",
    roomRating: "★ 4,16",
    isLovedByGuests: true,
  },
];
const turinRooms = [
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-38595668/original/13d1a62b-613c-4ede-bdae-75c65491b5e3.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Torino",
    roomDate: "19-21 oct",
    roomHost: "Host professionista",
    roomPrice: "174€ per 2 notti",
    roomRating: "★ 3,98",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTc5NTM1Mjg5MzY2NjQwMzg3/original/11261523-d38a-41ca-bb4a-d6bb9eaa6e9d.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Casa · Centro",
    roomDate: "09-11 oct",
    roomHost: "Host privato",
    roomPrice: "141€ per 2 notti",
    roomRating: "★ 4,84",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-727515948500930778/original/cbbce72f-0577-476c-a17a-8b1325447593.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Torino",
    roomDate: "28-30 oct",
    roomHost: "Host privato",
    roomPrice: "154€ per 2 notti",
    roomRating: "★ 4,76",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/8462fb08-28e5-432e-bbee-ef9a750a1a7d.jpg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Torino",
    roomDate: "15-17 nov",
    roomHost: "Host privato",
    roomPrice: "174€ per 2 notti",
    roomRating: "★ 4,51",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1405636961449915196/original/93958687-8543-4a02-b54d-e090567e9436.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Stanza · Torino",
    roomDate: "23-25 oct",
    roomHost: "Host professionista",
    roomPrice: "115€ per 2 notti",
    roomRating: "★ 4,65",
    isLovedByGuests: true,
  },

  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1144938374246219106/original/fcab5776-73c9-446e-873b-c0a366010710.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Vanchiglia",
    roomDate: "16-18 oct",
    roomHost: "Host privato",
    roomPrice: "132€ per 2 notti",
    roomRating: "★ 3,99",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/bad83fd4-341c-4ad7-bbfb-65415562c21e.jpg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Torino",
    roomDate: "02-04 oct",
    roomHost: "Host professionista",
    roomPrice: "168€ per 2 notti",
    roomRating: "★ 4,97",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/4f006617-21a8-48c2-be63-c472dd45eff6.jpg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Centro Torino",
    roomDate: "12-14 oct",
    roomHost: "Host privato",
    roomPrice: "232€ per 2 notti",
    roomRating: "★ 4,90",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1039797011569101076/original/2247f17c-d1db-49f2-a6ae-c907cd67ac45.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Torino",
    roomDate: "15-17 oct",
    roomHost: "Host professionista",
    roomPrice: "215€ per 2 notti",
    roomRating: "★ 4,96",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1272528337220051868/original/3abc5c70-ed89-4424-a116-b9bb70bacd60.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Stanza · Torino",
    roomDate: "01-03 oct",
    roomHost: "Host professionista",
    roomPrice: "123€ per 2 notti",
    roomRating: "★ 4,87",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/57572521/b576973c_original.jpg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Torino",
    roomDate: "18-20 oct",
    roomHost: "Host privato",
    roomPrice: "226€ per 2 notti",
    roomRating: "★ 4,75",
    isLovedByGuests: false,
  },
];
const milanRooms = [
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODQ5Nzk2Mjc3NTk2MjM4OTM5/original/6cf1870e-f0c7-4fac-8fa1-ae57ed5e2713.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · San Siro",
    roomDate: "19-21 oct",
    roomHost: "Host privato",
    roomPrice: "182€ per 2 notti",
    roomRating: "★ 4,93",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-49764547/original/e872d522-3fbc-44d0-be0e-4193820f9d66.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Casa · Milano",
    roomDate: "16-18 oct",
    roomHost: "Host privato",
    roomPrice: "196€ per 2 notti",
    roomRating: "★ 4,46",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1271486858891622173/original/bbf6ed8f-49bd-46d7-a486-0d303f2120e8.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Ospiate",
    roomDate: "15-17 nov",
    roomHost: "Host professionista",
    roomPrice: "298€ per 2 notti",
    roomRating: "★ 4,92",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2NzM5ODIwNTU0MDkwNzU0NQ==/original/2bf775f1-9f7f-428e-8db9-ea8320c51924.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Stanza · Milano",
    roomDate: "03-05 oct",
    roomHost: "Host professionista",
    roomPrice: "94€ per 2 notti",
    roomRating: "★ 4,95",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/ce9f5c8d-f25c-4f6f-8e82-c97d58a23858.jpg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Milano",
    roomDate: "15-17 oct",
    roomHost: "Host professionista",
    roomPrice: "215€ per 2 notti",
    roomRating: "★ 4,96",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1701780/original/fd6c90b5-f027-475d-a491-8f429424ea1c.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · San Siro",
    roomDate: "06-08 oct",
    roomHost: "Host privato",
    roomPrice: "199€ per 2 notti",
    roomRating: "★ 4,53",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1339054623996283816/original/ac3c4fb3-2f05-4d3c-b92e-996f05816a45.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Cusano",
    roomDate: "13-15 oct",
    roomHost: "Host professionista",
    roomPrice: "248€ per 2 notti",
    roomRating: "★ 4,98",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1339054623996283816/original/ac3c4fb3-2f05-4d3c-b92e-996f05816a45.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Navigli",
    roomDate: "22-24 oct",
    roomHost: "Host privato",
    roomPrice: "287€ per 2 notti",
    roomRating: "★ 4,54",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0NTU3MzM3NDE3MTY0MTMzMw==/original/0131e924-be12-43fc-9eed-b24b9ce882a7.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Milano",
    roomDate: "19-21 oct",
    roomHost: "Host professionista",
    roomPrice: "213€ per 2 notti",
    roomRating: "★ 4,16",
    isLovedByGuests: true,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1701780/original/fd6c90b5-f027-475d-a491-8f429424ea1c.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Stanza · San Siro",
    roomDate: "28-30 oct",
    roomHost: "Host privato",
    roomPrice: "125€ per 2 notti",
    roomRating: "★ 4,35",
    isLovedByGuests: false,
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-720789065652443945/original/92aebe1c-5cb7-493f-b9d5-cd1270c991a5.jpeg?im_w=720",
    imgAlt: "room picture",
    roomTitle: "Appartamento · Milano",
    roomDate: "19-21 oct",
    roomHost: "Host professionista",
    roomPrice: "254€ per 2 notti",
    roomRating: "★ 4,96",
    isLovedByGuests: true,
  },
];

const swiperWrapperRome = document.querySelector(".swiper-wrapper-rome");
const swiperWrapperTurin = document.querySelector(".swiper-wrapper-turin");
const swiperWrapperMilan = document.querySelector(".swiper-wrapper-milan");

function createAndAppendCard(room, container) {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  container.appendChild(swiperSlide);

  const airbnbCard = document.createElement("div");
  airbnbCard.classList.add("airbnb-card", "position-relative");
  swiperSlide.appendChild(airbnbCard);

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("card-img-container");
  airbnbCard.appendChild(cardImgContainer);

  const cardImg = document.createElement("img");
  cardImg.src = room.imgSrc;
  cardImg.alt = room.imgAlt;
  cardImgContainer.appendChild(cardImg);

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-descriptions");
  airbnbCard.appendChild(cardDescription);

  const cardTitle = document.createElement("h5");
  cardTitle.innerText = room.roomTitle;
  cardDescription.appendChild(cardTitle);

  const cardInfoFirstContainer = document.createElement("div");
  cardInfoFirstContainer.classList.add("card-info", "d-flex");
  cardDescription.appendChild(cardInfoFirstContainer);

  const cardDate = document.createElement("p");
  cardDate.innerText = room.roomDate;
  cardInfoFirstContainer.appendChild(cardDate);

  const firstInfoBull = document.createElement("p");
  firstInfoBull.classList.add("mx-1");
  firstInfoBull.innerHTML = `&bull;`;
  cardInfoFirstContainer.appendChild(firstInfoBull);

  const cardHost = document.createElement("p");
  cardHost.innerText = room.roomHost;
  cardInfoFirstContainer.appendChild(cardHost);

  const cardInfoSecondContainer = document.createElement("div");
  cardInfoSecondContainer.classList.add("card-info", "d-flex");
  cardDescription.appendChild(cardInfoSecondContainer);

  const cardPrice = document.createElement("p");
  cardPrice.innerText = room.roomPrice;
  cardInfoSecondContainer.appendChild(cardPrice);

  const secondInfoBull = document.createElement("p");
  secondInfoBull.classList.add("mx-1");
  secondInfoBull.innerHTML = `&bull;`;
  cardInfoSecondContainer.appendChild(secondInfoBull);

  const cardRating = document.createElement("p");
  cardRating.innerText = room.roomRating;
  cardInfoSecondContainer.appendChild(cardRating);

  const badgeHeartContainer = document.createElement("div");
  badgeHeartContainer.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "position-absolute",
    "badge-hearth-container"
  );
  airbnbCard.appendChild(badgeHeartContainer);

  if (room.isLovedByGuests) {
    const cardBadge = document.createElement("p");
    cardBadge.classList.add(
      "m-0",
      "position-absolute",
      "loved-by-guests-badge"
    );
    cardBadge.innerText = "Amato dagli ospiti";
    airbnbCard.appendChild(cardBadge);
  }

  const cardHeartContainer = document.createElement("div");
  cardHeartContainer.classList.add("heart-container", "position-absolute");
  cardHeartContainer.innerHTML = `<svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
       2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
       C13.09 3.81 14.76 3 16.5 3
       19.58 3 22 5.42 22 8.5
       c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>`;
  airbnbCard.appendChild(cardHeartContainer);
}

const romeSwiper = new Swiper(".rome-swiper", {
  grabCursor: true,
  navigation: {
    nextEl: ".rome-right-arrow",
    prevEl: ".rome-left-arrow",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 6
    },
    1440: {
      slidesPerView: 7
    }
  }
});

const turinSwiper = new Swiper(".turin-swiper", {
  grabCursor: true,
  navigation: {
    nextEl: ".turin-right-arrow",
    prevEl: ".turin-left-arrow",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 6
    },
    1440: {
      slidesPerView: 7
    }
  }
});

const milanSwiper = new Swiper(".milan-swiper", {
  grabCursor: true,
  navigation: {
    nextEl: ".milan-right-arrow",
    prevEl: ".milan-left-arrow",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 6
    },
    1440: {
      slidesPerView: 7
    }
  }
});

romeRooms.forEach((room) => {
  createAndAppendCard(room, swiperWrapperRome);
});

turinRooms.forEach((room) => {
  createAndAppendCard(room, swiperWrapperTurin);
});

milanRooms.forEach((room) => {
  createAndAppendCard(room, swiperWrapperMilan);
});


//FUNZIONE PER MODALI
const btnModalLanguage = document.getElementById("button-language");
const modalLanguage = document.querySelector(".modal-language");
const closeModalLanguage = document.querySelector(".close-language");

const btnModalValue = document.getElementById("button-value");
const modalValue = document.querySelector(".modal-value");
const closeModalValue = document.querySelector(".close-value");

function sectionModal(btn, show) {
  const modal = document.querySelector(btn);

  if (modal) {
    modal.style.display = show ? "block" : "none";
  }
}

btnModalLanguage.addEventListener("click", () => {
  sectionModal(".modal-language", true);
});

closeModalLanguage.addEventListener("click", () => {
  sectionModal(".modal-language", false);
});

btnModalValue.addEventListener("click", () => {
  sectionModal(".modal-value", true);
});

closeModalValue.addEventListener("click", () => {
  sectionModal(".modal-value", false);
});

/*AGGIUNTA FUNZIONE PER CONNETTERE LE PAGINE*/

const airbnbCards = document.querySelectorAll(".airbnb-card");

airbnbCards.forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "secondpage.html";
  });
});

/*FINE FUNZIONE PER CONNETTERE LE PAGINE*/


