const bookCardsContainer = document.querySelector(".book-cards-container");
const cartDialog = document.querySelector(".cart-dialog");
const cartNavIcon = document.querySelector(".bag-icon-container");
const closeModalButton = document.querySelector(".close-modal-button");
const cartContent = document.querySelector(".cart-content");
const cartItemCount = document.querySelector('.cart-item-count')

const toggleFillAndEmptyBookmarkIcon = (icon) => {
  icon.classList.toggle("bi-bookmark")
  icon.classList.toggle("bi-bookmark-fill");
};

let cart = [];

const updateCartItemCount = () => {
  cartItemCount.innerText = cart.length
}

const showCart = () => {
  cartDialog.showModal();
};

const hideCart = () => {
  cartDialog.close();
};

const getBooks = async () => {

  try {

    const urlData = `https://striveschool-api.herokuapp.com/books`;
    const response = await fetch(urlData)
    const data = await response.json()
    data.forEach(book => {
      createBookCard(book, bookCardsContainer)
    });

  } catch (error) {

    console.log(error.message);

  };
};

const createBookCard = (book, container) => {

  const bookCardContainer = document.createElement("div");
  bookCardContainer.setAttribute("class", "col-6 col-md-4 col-lg-3");
  container.appendChild(bookCardContainer)

  const bookCard = document.createElement("div");
  bookCard.setAttribute("class", "book-card p-0 d-flex flex-column h-100");
  bookCardContainer.appendChild(bookCard);

  const bookCardImgContainer = document.createElement("div");
  bookCardImgContainer.setAttribute("class", "book-card-img-container position-relative");
  bookCard.appendChild(bookCardImgContainer);

  const bookCardImg = document.createElement("img");
  bookCardImg.setAttribute("class", "w-100 h-100 object-fit-cover");
  bookCardImg.src = book.img;
  bookCardImgContainer.appendChild(bookCardImg);

  const bookCardFavouriteIcon = document.createElement("i");
  bookCardFavouriteIcon.setAttribute("class", "book-card-favourite-icon bi bi-heart text-dark position-absolute top-0 end-0");
  bookCardImgContainer.appendChild(bookCardFavouriteIcon);

  const bookCardCategory = document.createElement("span");
  bookCardCategory.setAttribute("class", "badge position-absolute bottom-0 start-0 m-2 rounded rounded-pill px-2 bg-secondary");
  bookCardCategory.innerText = book.category;
  bookCardImgContainer.appendChild(bookCardCategory);

  const bookCardInfoContainer = document.createElement("div");
  bookCardInfoContainer.setAttribute("class", "d-flex flex-column justify-content-between h-100 mt-3");
  bookCard.appendChild(bookCardInfoContainer);

  const bookCardTitle = document.createElement("h5");
  bookCardTitle.innerText = book.title;
  bookCardInfoContainer.appendChild(bookCardTitle);

  const bookCardPrice = document.createElement("p");
  bookCardPrice.innerText = `${book.price} €`;
  bookCardInfoContainer.appendChild(bookCardPrice);

  const addToCartIcon = document.createElement("i");
  addToCartIcon.setAttribute("class", "add-to-cart-icon bi bi-bookmark");
  addToCartIcon.dataset.asin = book.asin;
  bookCardInfoContainer.appendChild(addToCartIcon);

  addToCartIcon.addEventListener("click", () => {
    toggleFillAndEmptyBookmarkIcon(addToCartIcon);

    if (addToCartIcon.classList.contains("bi-bookmark-fill")) {
      addToCart(book)
      console.log(cart)
    } else if (addToCartIcon.classList.contains("bi-bookmark")) {
      deleteFromCart(book)
      console.log(cart)
    }

  });

};

const createCartItem = (book) => {

  const cartItemRow = document.createElement("div");
  cartItemRow.setAttribute("class", "d-flex align-items-center justify-content-between gap-3");
  cartContent.appendChild(cartItemRow);

  const cartItemImg = document.createElement("img");
  cartItemImg.setAttribute("class", "cart-item-img w-100 object-fit-cover");
  cartItemImg.src = book.img
  cartItemRow.appendChild(cartItemImg);

  const cartItemTitle = document.createElement('p');
  cartItemTitle.classList.add("m-0")
  cartItemTitle.innerText = book.title;
  cartItemRow.appendChild(cartItemTitle);

  const deleteCartItemButton = document.createElement('button');
  deleteCartItemButton.setAttribute('class', 'btn btn-outline-danger text-nowrap');
  deleteCartItemButton.innerHTML = `<small>Remove item</small>`;
  cartItemRow.appendChild(deleteCartItemButton);

  deleteCartItemButton.addEventListener("click", () => {
    deleteFromCart(book)
  })

};

cartNavIcon.addEventListener("click", () => {
  showCart();
});

closeModalButton.addEventListener("click", () => {
  hideCart();
});

const createEmptyCartMessage = () => {

  const alertContainer = document.createElement("div");
  alertContainer.setAttribute("class", "alert alert-dark m-0");
  alertContainer.innerText = "Your Cart is Empty"
  cartContent.appendChild(alertContainer);

}

const mapCartBooks = () => {
  if (cart.length === 0) {
    createEmptyCartMessage()
  }
  cart.map(book => {
    createCartItem(book)
  })
}

const addToCart = (book) => {
  cart.push(book);
  updateCartItemCount();
  cartContent.innerHTML = "";
  mapCartBooks();
};

const deleteFromCart = (book) => {
  const filteredCart = cart.filter(element => element !== book);
  cart = [...filteredCart];
  updateCartItemCount();
  cartContent.innerHTML = "";
  mapCartBooks();

  const addToCartIcons = document.querySelectorAll(".add-to-cart-icon");

  addToCartIcons.forEach(icon => {

    if (icon.dataset.asin === `${book.asin}`) {
      
      icon.classList.remove("bi-bookmark-fill");
      icon.classList.add("bi-bookmark");

    }
  })

}



getBooks();
mapCartBooks();