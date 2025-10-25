const bookDetailsContainer = document.querySelector(".book-details-container");

const params = new URLSearchParams(window.location.search);

const bookAsin = params.get("asin");

const getBookData = async () => {

  try {

    const response = await fetch(`https://striveschool-api.herokuapp.com/books/${bookAsin}`)
    const data = await response.json();

    console.log(data)

    return data

  } catch (error) {
    console.log(error)
  }
}

getBookData().then(data => {
  createBookData(data, bookDetailsContainer)
})

const createBookData = (book, container) => {

  const detailsBookContainer = document.createElement("div");
  detailsBookContainer.setAttribute("class", "d-flex flex-column gap-3");
  container.appendChild(detailsBookContainer);

  const detailsBookTitle = document.createElement("h2");
  detailsBookTitle.classList.add("text-dark");
  detailsBookTitle.innerText = book.title;
  detailsBookContainer.appendChild(detailsBookTitle);

  const detailsBookImg = document.createElement("img");
  detailsBookImg.setAttribute("class", "w-100 object-fit-cover");
  detailsBookImg.src = book.img;
  detailsBookContainer.appendChild(detailsBookImg);

  const detailsBookInfoContainer = document.createElement("div");
  detailsBookInfoContainer.setAttribute("class", "d-flex justify-content-between align-items-center");
  detailsBookContainer.appendChild(detailsBookInfoContainer);

  const detailsBookCategory = document.createElement("p");
  detailsBookCategory.classList.add("details-book-category");
  detailsBookCategory.innerText = book.category;
  detailsBookInfoContainer.appendChild(detailsBookCategory);

  const detailsBookPrice = document.createElement("p");
  detailsBookPrice.classList.add("details-book-price");
  detailsBookPrice.innerText = `${book.price} $`;
  detailsBookInfoContainer.appendChild(detailsBookPrice);

}
