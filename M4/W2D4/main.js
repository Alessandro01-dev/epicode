const bookCardsContainer = document.querySelector(".book-cards-container");

const getBooks = async () => {

  try {

    const urlData = `https://striveschool-api.herokuapp.com/books`;
    const response = await fetch(urlData)
      .then(response => response.json())
    response.forEach(element => {
      createBookCard(element, bookCardsContainer)
    });

  } catch (error) {

    console.log(error.message);

  };
}

const createBookCard = (book, container) => {

  const bookCardContainer = document.createElement("div");
  bookCardContainer.setAttribute("class", "book-card-container col-6 col-md-4 col-lg-3");
  container.appendChild(bookCardContainer);

  const bookCardImgContainer = document.createElement("div");
  bookCardContainer.appendChild(bookCardImgContainer);

  const bookCardImg = document.createElement("img");
  bookCardImg.setAttribute("class", "w-100 h-100 object-fit-cover");
  bookCardImg.src = book.img;
  bookCardImgContainer.appendChild(bookCardImg)

  const bookCardTitle = document.createElement("h5");
  bookCardTitle.innerText = book.title;
  bookCardContainer.appendChild(bookCardTitle);

  const bookCardPrice = document.createElement("p");
  bookCardPrice.innerText = `${book.price} €`;
  bookCardContainer.appendChild(bookCardPrice);

  const bookCardCategory = document.createElement("span");
  bookCardCategory.setAttribute("class", "badge text-bg-dark");
  bookCardCategory.innerText = book.category;
  bookCardContainer.appendChild(bookCardCategory);

};

getBooks();

