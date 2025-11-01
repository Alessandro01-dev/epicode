const searchInput = document.querySelector(".search-container input");
const searchIcon = document.querySelector(".search-icon-container i");

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

const newProduct = {
  name: "4610 cellphone",
  description: "An unforgettable icon.",
  brand: "Nokia",
  imageUrl: "https://bit.ly/3CExjRa",
  price: 100
}

createProduct(newProduct)

getProducts()
  .then(res => console.log(res))
