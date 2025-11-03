const productsContainer = document.getElementById("products-container");

const URLData = "https://striveschool-api.herokuapp.com/api/product/"

const getProducts = async () => {

  try {

    const response = await fetch(URLData, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjE5OTkyMzcsImV4cCI6MTc2MzIwODgzN30.EpWRymcY9re_KLNkZ37E4Y34r6XWl2123tMzMX7y_l4"
      }
    })

    return await response.json()

  } catch (error) {
    console.log(error)
  }

}

getProducts()
  .then(res => console.log(res))

const createProductCard = (product, container) => {

  const productCardWrapper = document.createElement("div")
  productCardWrapper.setAttribute("class", "col-6 col-md-4 col-lg-3")
  container.appendChild(productCardWrapper)

  const productCardContainer = document.createElement("div")
  productCardContainer.setAttribute("class", "d-flex flex-column gap-2 align-items-start justify-content-between product-card-container position-relative")
  productCardWrapper.appendChild(productCardContainer)

  productCardContainer.addEventListener("click", () => {
    window.location.href = `./details.html?productId=${product._id}`
  })

  const productCardImgContainer = document.createElement("div")
  productCardImgContainer.classList.add("product-card-img-container")
  productCardContainer.appendChild(productCardImgContainer)

  const productCardImg = document.createElement("img")
  productCardImg.setAttribute("class", "w-100 object-fit-cover")
  productCardImg.src = product.imageUrl
  productCardImg.alt = product.name
  productCardImgContainer.appendChild(productCardImg)

  const productCardTitle = document.createElement("h5")
  productCardTitle.innerText = product.name
  productCardContainer.appendChild(productCardTitle)

  const productCardDescription = document.createElement("p")
  productCardDescription.innerText = product.description
  productCardContainer.appendChild(productCardDescription)

  const productCardBottomSectionContainer = document.createElement("div")
  productCardBottomSectionContainer.setAttribute("class", "d-flex justify-content-between w-100")
  productCardContainer.appendChild(productCardBottomSectionContainer)

  const productCardBrand = document.createElement("p")
  productCardBrand.setAttribute("class", "badge rounded-pill text-bg-dark m-0")
  productCardBrand.innerText = product.brand
  productCardBottomSectionContainer.appendChild(productCardBrand)

  const productCardPrice = document.createElement("p")
  productCardPrice.classList.add("product-card-price", "m-0")
  productCardPrice.innerText = `${product.price} $`
  productCardBottomSectionContainer.appendChild(productCardPrice)

}

getProducts()
  .then(res => {
    res.forEach(product => {
      createProductCard(product, productsContainer)
    });
  })