const submitFormButton = document.getElementById("submit-button");
const form = document.querySelector("form");

const newProductNameFormInput = document.getElementById("new-product-name");
const newProductBrandFormInput = document.getElementById("new-product-brand");
const newProductPriceFormInput = document.getElementById("new-product-price");
const newProductUrlImageFormInput = document.getElementById("new-product-url-image");
const newProductDescriptionFormInput = document.getElementById("new-product-description");

const newProductNameFormInputInvalidFeedback = document.getElementById("new-product-name-invalid-feedback");
const newProductBrandFormInputInvalidFeedback = document.getElementById("new-product-brand-invalid-feedback");
const newProductPriceFormInputInvalidFeedback = document.getElementById("new-product-price-invalid-feedback");
const newProductUrlImageFormInputInvalidFeedback = document.getElementById("new-product-url-image-invalid-feedback");
const newProductDescriptionFormInputInvalidFeedback = document.getElementById("new-product-description-invalid-feedback");

let newProductObj = {};

const returnNewProductObjFromInputValues = () => {

  return newProductObj = {
    name: newProductNameFormInput.value,
    brand: newProductBrandFormInput.value,
    price: newProductPriceFormInput.value,
    description: newProductDescriptionFormInput.value,
    imageUrl: newProductUrlImageFormInput.value,

  }

}

const validateNewProductName = () => {

  const newProductNameInputValue = newProductNameFormInput.value.trim()
  const validName = /^[A-Za-z0-9][A-Za-z0-9\s\-\.,:&]{0,98}[A-Za-z0-9]$/

  if (newProductNameInputValue === "") {
    newProductNameFormInputInvalidFeedback.classList.remove("d-none")
    newProductNameFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    newProductNameFormInput.classList.add("is-invalid")
    return false
  } else if (!validName.test(newProductNameInputValue)) {
    newProductNameFormInputInvalidFeedback.classList.remove("d-none")
    newProductNameFormInputInvalidFeedback.innerText = `${newProductNameFormInput.value} is not a valid product name.`
    newProductNameFormInput.classList.add("is-invalid")
    return false
  } else {
    newProductNameFormInputInvalidFeedback.classList.add("d-none")
    newProductNameFormInput.classList.remove("is-invalid")
    newProductNameFormInput.classList.add("is-valid")
    return true
  }

}

newProductNameFormInput.addEventListener("input", validateNewProductName)

const validateNewProductBrand = () => {

  const newProductBrandInputValue = newProductBrandFormInput.value.trim()
  const validBrand = /^\w[\w.\-#&\s]*$/

  if (newProductBrandInputValue === "") {
    newProductBrandFormInputInvalidFeedback.classList.remove("d-none")
    newProductBrandFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    newProductBrandFormInput.classList.add("is-invalid")
    return false
  } else if (!validBrand.test(newProductBrandInputValue)) {
    newProductBrandFormInputInvalidFeedback.classList.remove("d-none")
    newProductBrandFormInputInvalidFeedback.innerText = `${newProductBrandFormInput.value} is not a valid brand name.`
    newProductBrandFormInput.classList.add("is-invalid")
    return false
  } else {
    newProductBrandFormInputInvalidFeedback.classList.add("d-none")
    newProductBrandFormInput.classList.remove("is-invalid")
    newProductBrandFormInput.classList.add("is-valid")
    return true
  }

}

newProductBrandFormInput.addEventListener("input", validateNewProductBrand)

const validateNewProductPrice = () => {

  const newProductPriceInputValue = newProductPriceFormInput.value.trim()

  if (newProductPriceInputValue === "") {
    newProductPriceFormInputInvalidFeedback.classList.remove("d-none")
    newProductPriceFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    newProductPriceFormInput.classList.add("is-invalid")
    return false
  } else if (isNaN(newProductPriceInputValue) || Number(newProductPriceInputValue) > 10000 || Number(newProductPriceInputValue) < 0) {
    newProductPriceFormInputInvalidFeedback.classList.remove("d-none")
    newProductPriceFormInputInvalidFeedback.innerText = `${newProductPriceFormInput.value} is not a valid product price.`
    newProductPriceFormInput.classList.add("is-invalid")
    return false
  } else {
    newProductPriceFormInputInvalidFeedback.classList.add("d-none")
    newProductPriceFormInput.classList.remove("is-invalid")
    newProductPriceFormInput.classList.add("is-valid")
    return true
  }

}

newProductPriceFormInput.addEventListener("input", validateNewProductPrice)

const validateNewProductUrlImage = () => {

  const newProductUrlImageInputValue = newProductUrlImageFormInput.value.trim()
  const validAddress = /(https?:\/\/.*\.(?:png|jpg))/i

  if (newProductUrlImageInputValue === "") {
    newProductUrlImageFormInputInvalidFeedback.classList.remove("d-none")
    newProductUrlImageFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    newProductUrlImageFormInput.classList.add("is-invalid")
    return false
  } else if (!validAddress.test(newProductUrlImageInputValue)) {
    newProductUrlImageFormInputInvalidFeedback.classList.remove("d-none")
    newProductUrlImageFormInputInvalidFeedback.innerText = `${newProductUrlImageFormInput.value} is not a valid Url image (must start with "https://" and end with ".png" or ".jpg").`
    newProductUrlImageFormInput.classList.add("is-invalid")
    return false
  } else {
    newProductUrlImageFormInputInvalidFeedback.classList.add("d-none")
    newProductUrlImageFormInput.classList.remove("is-invalid")
    newProductUrlImageFormInput.classList.add("is-valid")
    return true
  }

}

newProductUrlImageFormInput.addEventListener("input", validateNewProductUrlImage)

const validateNewProductDescription = () => {

  const newProductDescriptionInputValue = newProductDescriptionFormInput.value.trim()

  if (newProductDescriptionInputValue === "") {
    newProductDescriptionFormInputInvalidFeedback.classList.remove("d-none")
    newProductDescriptionFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    newProductDescriptionFormInput.classList.add("is-invalid")
    return false
  } else if (newProductDescriptionInputValue.length < 10 || newProductDescriptionInputValue.length > 60) {
    newProductDescriptionFormInputInvalidFeedback.classList.remove("d-none")
    newProductDescriptionFormInputInvalidFeedback.innerText = "The description length must be between 10 and 60 characters."
    newProductDescriptionFormInput.classList.add("is-invalid")
    return false
  } else {
    newProductDescriptionFormInputInvalidFeedback.classList.add("d-none")
    newProductDescriptionFormInput.classList.remove("is-invalid")
    newProductDescriptionFormInput.classList.add("is-valid")
    return true
  }

}

newProductDescriptionFormInput.addEventListener("input", validateNewProductDescription)

const validateForm = () => {

  if (validateNewProductName() && validateNewProductBrand() && validateNewProductPrice() && validateNewProductUrlImage() && validateNewProductDescription()) {

    return true

  } else {

    return false

  }

}

const createNewProduct = async (obj) => {

  const URLData = "https://striveschool-api.herokuapp.com/api/product/"

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

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  if (validateForm()) {

    returnNewProductObjFromInputValues()

    await createNewProduct(newProductObj)
      .then(res => console.log(res))

    form.reset()

    alert("prodotto creato!")

  }

})