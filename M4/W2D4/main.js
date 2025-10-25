const bookCardsContainer = document.querySelector(".book-cards-container");
const cartDialog = document.querySelector(".cart-dialog");
const cartNavIcon = document.querySelector(".bag-icon-container");
const closeModalButton = document.querySelector(".close-modal-button");
const cartContent = document.querySelector(".cart-content");
const cartItemCount = document.querySelector('.cart-item-count');
const topSearchInput = document.querySelector(".top-search-input");
const bottomSearchInput = document.querySelector(".bottom-search-input");
const topSearchIcon = document.querySelector(".top-search-icon-container");
const bottomSearchIcon = document.querySelector(".bottom-search-icon-container");
const removeAllCartItemsIcon = document.querySelector(".remove-all-cart-items");

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

    return data

  } catch (error) {

    console.log(error.message);

  };
};
 
const deletebookCardItem = (book) => {

  const deletebookCardIcons = document.querySelectorAll(".delete-book-card-item");

  deletebookCardIcons.forEach(icon => {
    
    if (icon.dataset.asin === book.asin)
      
      icon.parentNode.parentNode.parentNode.remove();

  })

}

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
  bookCardImgContainer.addEventListener("click", () => {
    window.location.href = `./details.html?asin=${book.asin}`
  });

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
  bookCardTitle.addEventListener("click", () => {
    window.location.href = `./details.html?asin=${book.asin}`
  });

  const bookCardPrice = document.createElement("p");
  bookCardPrice.innerText = `${book.price} €`;
  bookCardInfoContainer.appendChild(bookCardPrice);

  const bookCardIconsContainer = document.createElement("div");
  bookCardIconsContainer.setAttribute("class", "d-flex align-self-end")
  bookCardInfoContainer.appendChild(bookCardIconsContainer);

  const deletebookCardIcon = document.createElement("i")
  deletebookCardIcon.setAttribute("class", "bi bi-x-circle delete-book-card-item m-0");
  deletebookCardIcon.dataset.asin = book.asin;
  bookCardIconsContainer.appendChild(deletebookCardIcon);
  deletebookCardIcon.addEventListener("click", () => {
    deletebookCardItem(book);
  });

  const addToCartIcon = document.createElement("i");
  addToCartIcon.setAttribute("class", "add-to-cart-icon bi bi-bookmark m-0");
  addToCartIcon.dataset.asin = book.asin;
  bookCardIconsContainer.appendChild(addToCartIcon);

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

    if (icon.dataset.asin === book.asin) {

      icon.classList.remove("bi-bookmark-fill");
      icon.classList.add("bi-bookmark");

    }
  })
}

const getActiveSearchInput = () => {
  if (window.innerWidth < 1024) {
    return bottomSearchInput
  } else {
    return topSearchInput
  };
};

const getActiveSearchIcon = () => {
  if (window.innerWidth < 1024) {
    return bottomSearchIcon
  } else {
    return topSearchIcon
  };
};

const searchByTitle = (data) => {
  const searchInput = getActiveSearchInput()
  const inputValue = searchInput.value.toLowerCase();

  const results = [];

  bookCardsContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {

    if (data[i].title.toLowerCase().includes(inputValue)) {
      results.push(data[i])
    }

  }

  console.log(results)

  results.forEach(result => {
    createBookCard(result, bookCardsContainer)
  })

}

topSearchIcon.addEventListener("click", () => {
  const activeInput = getActiveSearchInput();
  activeInput.focus();
});

bottomSearchIcon.addEventListener("click", () => {
  const activeInput = getActiveSearchInput();
  activeInput.focus();
});

getBooks().then(data => {

  data.forEach(book => {
    createBookCard(book, bookCardsContainer)
  })

  topSearchInput.addEventListener("input", () => searchByTitle(data));
  bottomSearchInput.addEventListener("input", () => searchByTitle(data));

});

const removeAllCartItems = (cart) => {

  cart.forEach(cartItem => {
    deleteFromCart(cartItem)
  })

}
removeAllCartItemsIcon.addEventListener("click", () => {
  removeAllCartItems(cart)
})

mapCartBooks();