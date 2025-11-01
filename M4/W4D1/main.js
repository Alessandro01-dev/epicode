const searchInput = document.querySelector(".search-container input");
const searchIcon = document.querySelector(".search-icon-container i");
const productsContainer = document.getElementById("products-container");

const hideAndShowSearchInput = () => {

  searchInput.classList.toggle("d-none")
  searchIcon.classList.toggle("text-white")

}

searchIcon.addEventListener("click", hideAndShowSearchInput)

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

const createProduct = async (obj) => {

  try {

    const response = await fetch(URLData, {

      method: "POST",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjE5OTkyMzcsImV4cCI6MTc2MzIwODgzN30.EpWRymcY9re_KLNkZ37E4Y34r6XWl2123tMzMX7y_l4",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })

    return await response.json()

  } catch (error) {
    console.log(error)
  }

}

const deleteProduct = async (event) => {

  const productId = event.target.dataset.id

  try {

    const response = await fetch(`${URLData}${productId}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjE5OTkyMzcsImV4cCI6MTc2MzIwODgzN30.EpWRymcY9re_KLNkZ37E4Y34r6XWl2123tMzMX7y_l4"
      }
    })

    updateProducts()

  } catch (error) {
    console.log(error)
  }
}

const updateProducts = async () => {

  const updatedProducts = await getProducts()

  productsContainer.innerHTML = ""

  updatedProducts.forEach(updatedProduct => createProductCard(updatedProduct, productsContainer))

}

const newProduct = {
  name: "5010 cellphone",
  description: "An unforgettable icon.",
  brand: "Nokia",
  imageUrl: "https://bit.ly/3CExjRa",
  price: 100
}

createProduct(newProduct)

const createProductCard = (product, container) => {

  const productCardWrapper = document.createElement("div")
  productCardWrapper.setAttribute("class", "col-6 col-md-4 col-lg-3")
  container.appendChild(productCardWrapper)

  const productCardContainer = document.createElement("div")
  productCardContainer.setAttribute("class", "d-flex flex-column gap-2 align-items-start product-card-container position-relative")
  productCardWrapper.appendChild(productCardContainer)

  const productCardImgContainer = document.createElement("div")
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
  productCardBrand.setAttribute("class", "badge rounded-pill text-bg-dark")
  productCardBrand.innerText = product.brand
  productCardBottomSectionContainer.appendChild(productCardBrand)

  const productCardPrice = document.createElement("p")
  productCardPrice.classList.add("product-card-price")
  productCardPrice.innerText = `${product.price} $`
  productCardBottomSectionContainer.appendChild(productCardPrice)

  const productCardDeleteProduct = document.createElement("div")
  productCardDeleteProduct.setAttribute("class", "btn-close position-absolute top-0 end-0")
  productCardDeleteProduct.dataset.id = product._id
  productCardContainer.appendChild(productCardDeleteProduct)
  productCardDeleteProduct.addEventListener("click", deleteProduct)

}

getProducts()
  .then(res => {
    res.forEach(product => {
      createProductCard(product, productsContainer)
    });
  })

