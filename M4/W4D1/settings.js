const settingProductsSearchInput = document.getElementById("setting-products-search-input");
const settingProductsResultsContainer = document.querySelector(".setting-products-results-container");
const searchOptionElements = document.querySelectorAll(".search-by-option");
const selectOptionButton = document.querySelector(".select-option-button");
const togglesettingsProductButton = document.querySelector(".toggle-switch-button");

const toRemoveModalProduct = document.querySelector(".to-remove-modal-product");
const removeProductModalBtn = document.getElementById("remove-product-modal-btn");

const editProductModal = document.getElementById("editProductModal")
const removeProductModal = document.getElementById("removeProductModal")
const selectedToEditProductModalContainer = document.querySelector(".selected-to-edit-product-modal-container");

const addNewProductIcon = document.querySelector(".add-product-icon");

addNewProductIcon.addEventListener("click", () => {
  window.location.href = "addNewProduct.html"
})

const editProductForm = document.querySelector(".edit-product-form");

const editedProductNameFormInput = document.getElementById("edited-product-name");
const editedProductBrandFormInput = document.getElementById("edited-product-brand");
const editedProductPriceFormInput = document.getElementById("edited-product-price");
const editedProductUrlImageFormInput = document.getElementById("edited-product-url-image");
const editedProductDescriptionFormInput = document.getElementById("edited-product-description");

const editedProductNameFormInputInvalidFeedback = document.getElementById("edited-product-name-invalid-feedback");
const editedProductBrandFormInputInvalidFeedback = document.getElementById("edited-product-brand-invalid-feedback");
const editedProductPriceFormInputInvalidFeedback = document.getElementById("edited-product-price-invalid-feedback");
const editedProductUrlImageFormInputInvalidFeedback = document.getElementById("edited-product-url-image-invalid-feedback");
const editedProductDescriptionFormInputInvalidFeedback = document.getElementById("edited-product-description-invalid-feedback");

let editedProductObj = {};

const returnEditedProductObjFromInputValues = () => {

  return editedProductObj = {
    name: editedProductNameFormInput.value,
    brand: editedProductBrandFormInput.value,
    price: editedProductPriceFormInput.value,
    description: editedProductDescriptionFormInput.value,
    imageUrl: editedProductUrlImageFormInput.value,

  }

}

const validateEditedProductName = () => {

  const editedProductNameInputValue = editedProductNameFormInput.value.trim()
  const validName = /^[A-Za-z0-9][A-Za-z0-9\s\-\.,:&]{0,98}[A-Za-z0-9]$/

  if (editedProductNameInputValue === "") {
    editedProductNameFormInputInvalidFeedback.classList.remove("d-none")
    editedProductNameFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    editedProductNameFormInput.classList.add("is-invalid")
    return false
  } else if (!validName.test(editedProductNameInputValue)) {
    editedProductNameFormInputInvalidFeedback.classList.remove("d-none")
    editedProductNameFormInputInvalidFeedback.innerText = `${editedProductNameFormInput.value} is not a valid product name.`
    editedProductNameFormInput.classList.add("is-invalid")
    return false
  } else {
    editedProductNameFormInputInvalidFeedback.classList.add("d-none")
    editedProductNameFormInput.classList.remove("is-invalid")
    editedProductNameFormInput.classList.add("is-valid")
    return true
  }

}

editedProductNameFormInput.addEventListener("input", validateEditedProductName)

const validateEditedProductBrand = () => {

  const editedProductBrandInputValue = editedProductBrandFormInput.value.trim()
  const validBrand = /^\w[\w.\-#&\s]*$/

  if (editedProductBrandInputValue === "") {
    editedProductBrandFormInputInvalidFeedback.classList.remove("d-none")
    editedProductBrandFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    editedProductBrandFormInput.classList.add("is-invalid")
    return false
  } else if (!validBrand.test(editedProductBrandInputValue)) {
    editedProductBrandFormInputInvalidFeedback.classList.remove("d-none")
    editedProductBrandFormInputInvalidFeedback.innerText = `${editedProductBrandFormInput.value} is not a valid brand name.`
    editedProductBrandFormInput.classList.add("is-invalid")
    return false
  } else {
    editedProductBrandFormInputInvalidFeedback.classList.add("d-none")
    editedProductBrandFormInput.classList.remove("is-invalid")
    editedProductBrandFormInput.classList.add("is-valid")
    return true
  }

}

editedProductBrandFormInput.addEventListener("input", validateEditedProductBrand)

const validateEditedProductPrice = () => {

  const editedProductPriceInputValue = editedProductPriceFormInput.value.trim()

  if (editedProductPriceInputValue === "") {
    editedProductPriceFormInputInvalidFeedback.classList.remove("d-none")
    editedProductPriceFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    editedProductPriceFormInput.classList.add("is-invalid")
    return false
  } else if (isNaN(editedProductPriceInputValue) || Number(editedProductPriceInputValue) > 10000 || Number(editedProductPriceInputValue) < 0) {
    editedProductPriceFormInputInvalidFeedback.classList.remove("d-none")
    editedProductPriceFormInputInvalidFeedback.innerText = `${editedProductPriceFormInput.value} is not a valid product price.`
    editedProductPriceFormInput.classList.add("is-invalid")
    return false
  } else {
    editedProductPriceFormInputInvalidFeedback.classList.add("d-none")
    editedProductPriceFormInput.classList.remove("is-invalid")
    editedProductPriceFormInput.classList.add("is-valid")
    return true
  }

}

editedProductPriceFormInput.addEventListener("input", validateEditedProductPrice)

const validateEditedProductUrlImage = () => {

  const editedProductUrlImageInputValue = editedProductUrlImageFormInput.value.trim()
  const validAddress = /(https?:\/\/.*\.(?:png|jpg))/i

  if (editedProductUrlImageInputValue === "") {
    editedProductUrlImageFormInputInvalidFeedback.classList.remove("d-none")
    editedProductUrlImageFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    editedProductUrlImageFormInput.classList.add("is-invalid")
    return false
  } else if (!validAddress.test(editedProductUrlImageInputValue)) {
    editedProductUrlImageFormInputInvalidFeedback.classList.remove("d-none")
    editedProductUrlImageFormInputInvalidFeedback.innerText = `${editedProductUrlImageFormInput.value} is not a valid Url image (must start with "https://" and end with ".png" or ".jpg").`
    editedProductUrlImageFormInput.classList.add("is-invalid")
    return false
  } else {
    editedProductUrlImageFormInputInvalidFeedback.classList.add("d-none")
    editedProductUrlImageFormInput.classList.remove("is-invalid")
    editedProductUrlImageFormInput.classList.add("is-valid")
    return true
  }

}

editedProductUrlImageFormInput.addEventListener("input", validateEditedProductUrlImage)

const validateEditedProductDescription = () => {

  const editedProductDescriptionInputValue = editedProductDescriptionFormInput.value.trim()

  if (editedProductDescriptionInputValue === "") {
    editedProductDescriptionFormInputInvalidFeedback.classList.remove("d-none")
    editedProductDescriptionFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    editedProductDescriptionFormInput.classList.add("is-invalid")
    return false
  } else if (editedProductDescriptionInputValue.length < 10 || editedProductDescriptionInputValue.length > 60) {
    editedProductDescriptionFormInputInvalidFeedback.classList.remove("d-none")
    editedProductDescriptionFormInputInvalidFeedback.innerText = "The description length must be between 10 and 60 characters."
    editedProductDescriptionFormInput.classList.add("is-invalid")
    return false
  } else {
    editedProductDescriptionFormInputInvalidFeedback.classList.add("d-none")
    editedProductDescriptionFormInput.classList.remove("is-invalid")
    editedProductDescriptionFormInput.classList.add("is-valid")
    return true
  }

}

editedProductDescriptionFormInput.addEventListener("input", validateEditedProductDescription)

const validateForm = () => {

  if (validateEditedProductName() && validateEditedProductBrand() && validateEditedProductPrice() && validateEditedProductUrlImage() && validateEditedProductDescription()) {

    return true

  } else {

    return false

  }

}

const editProduct = async (editedObj, productId) => {

  const URLData = `https://striveschool-api.herokuapp.com/api/product/${productId}`

  try {

    const response = await fetch(URLData, {

      method: "PUT",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjIyNTIyNzUsImV4cCI6MTc2MzQ2MTg3NX0.mNQzhFwQ4-rZuZFSdmn1rvftNCuNvc-NLqQGQNrvFBg" /*VECCHIO TOKEN: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjE5OTkyMzcsImV4cCI6MTc2MzIwODgzN30.EpWRymcY9re_KLNkZ37E4Y34r6XWl2123tMzMX7y_l4*/,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObj)
    })

    return await response.json(editedObj)

  } catch (error) {
    console.log(error)
  }

}

const getProducts = async () => {

  const URLData = "https://striveschool-api.herokuapp.com/api/product/"

  try {

    const response = await fetch(URLData, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjIyNTIyNzUsImV4cCI6MTc2MzQ2MTg3NX0.mNQzhFwQ4-rZuZFSdmn1rvftNCuNvc-NLqQGQNrvFBg" /*VECCHIO TOKEN: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjE5OTkyMzcsImV4cCI6MTc2MzIwODgzN30.EpWRymcY9re_KLNkZ37E4Y34r6XWl2123tMzMX7y_l4*/
      }
    })

    return await response.json()

  } catch (error) {
    console.log(error)
  }

}

let searchOption = "name";

searchOptionElements.forEach(searchOptionElement => {

  searchOptionElement.addEventListener("click", () => {

    searchOption = searchOptionElement.dataset.option;

    selectOptionButton.innerText = searchOptionElement.innerText;

  })
})

const filterProducts = (arr) => {

  settingProductsResultsContainer.innerHTML = "";

  const inputValue = settingProductsSearchInput.value.toLowerCase();

  const results = arr.filter(product =>
    String(product[searchOption]).toLowerCase().includes(inputValue)
  );

  results.forEach(product => {
    createProductItem(product, settingProductsResultsContainer);
  });
};

const createProductItem = (product, container) => {

  const settingsProductRowItem = document.createElement("tr");
  container.appendChild(settingsProductRowItem);

  const settingsProductImageContainerTableHeader = document.createElement("th");
  settingsProductImageContainerTableHeader.setAttribute("scope", "row");
  settingsProductImageContainerTableHeader.classList.add("settings-product-image-container")
  settingsProductRowItem.appendChild(settingsProductImageContainerTableHeader);

  const settingsProductImageTableHeader = document.createElement("img")
  settingsProductImageTableHeader.setAttribute("class", "w-100 h-100 object-fit-cover")
  settingsProductImageTableHeader.src = product.imageUrl
  settingsProductImageContainerTableHeader.appendChild(settingsProductImageTableHeader)

  const settingsproductNameTableData = document.createElement("td");
  settingsproductNameTableData.innerText = product.name;
  settingsProductRowItem.appendChild(settingsproductNameTableData);

  const settingsProductBrandTableData = document.createElement("td");
  settingsProductBrandTableData.innerText = product.brand;
  settingsProductRowItem.appendChild(settingsProductBrandTableData);

  const settingsProductPriceTableData = document.createElement("td");
  settingsProductPriceTableData.innerText = product.price;
  settingsProductRowItem.appendChild(settingsProductPriceTableData);

  if (searchOption === "name") {
    settingsproductNameTableData.classList.add("fw-bold");
  } else if (searchOption === "brand") {
    settingsProductBrandTableData.classList.add("fw-bold");
  } else if (searchOption === "price") {
    settingsProductPriceTableData.classList.add("fw-bold");
  }

  const settingsProductButtonContainer = document.createElement("td");
  settingsProductRowItem.appendChild(settingsProductButtonContainer);

  if (!togglesettingsProductButton.checked) {

    const settingsProductRemoveButton = document.createElement("button");
    settingsProductRemoveButton.setAttribute("class", "settings-product-remove-button");
    settingsProductRemoveButton.setAttribute("data-bs-toggle", "modal");
    settingsProductRemoveButton.setAttribute("data-bs-target", "#removeProductModal");
    settingsProductRemoveButton.innerText = "Remove";
    settingsProductRemoveButton.dataset.id = product._id
    settingsProductButtonContainer.appendChild(settingsProductRemoveButton);

    settingsProductRemoveButton.addEventListener("click", (event) => {

      const productId = event.target.dataset.id;

      getProducts()
        .then(data => {

          const productToRemove = data.find(product => product._id === productId)

          toRemoveModalProduct.innerText = productToRemove.name

          removeProductModalBtn.addEventListener("click", () => {

            deleteProduct(productToRemove);

            const removeModalInstance = bootstrap.Modal.getInstance(removeProductModal);
            removeModalInstance.hide();

            alert("Product removed successfully!")

          })

        })
    })

  } else if (togglesettingsProductButton.checked) {

    const settingsProductEditButton = document.createElement("button");
    settingsProductEditButton.setAttribute("class", "settings-product-edit-button");
    settingsProductEditButton.innerText = "Edit";
    settingsProductEditButton.dataset.id = product._id
    settingsProductButtonContainer.appendChild(settingsProductEditButton);

    settingsProductEditButton.setAttribute("data-bs-toggle", "modal");
    settingsProductEditButton.setAttribute("data-bs-target", "#editProductModal");
    settingsProductEditButton.addEventListener("click", (event) => {

      const productId = event.target.dataset.id;

      getProducts()
        .then(data => {

          const productToEdit = data.find(product => product._id === productId)

          selectedToEditProductModalContainer.innerHTML = "";

          showToEditProductInfo(productToEdit, selectedToEditProductModalContainer)

          editProductForm.addEventListener("submit", async (e) => {
            e.preventDefault()

            if (validateForm()) {

              returnEditedProductObjFromInputValues()

              await editProduct(editedProductObj, productId)
                .then(res => console.log(res))

              console.log(editedProductObj)

              editProductForm.reset()

              updateProducts()

              const editModalInstance = bootstrap.Modal.getInstance(editProductModal);
              editModalInstance.hide();

              alert("Product edited successfully!");

            }

          })

        })
    })
  }
}


const showToEditProductInfo = (product, container) => {

  const toEditProductName = document.createElement("h5");
  toEditProductName.innerText = product.name;
  toEditProductName.setAttribute("class", "to-edit-product-name");
  container.appendChild(toEditProductName);

  const toEditProductBrand = document.createElement("p");
  toEditProductBrand.innerText = product.brand;
  toEditProductBrand.setAttribute("class", "to-edit-product-brand");
  container.appendChild(toEditProductBrand);

  const toEditProductPrice = document.createElement("p");
  toEditProductPrice.innerText = product.price;
  toEditProductPrice.setAttribute("class", "to-edit-product-price");
  container.appendChild(toEditProductPrice);

  const toEditProductImageUrl = document.createElement("div");
  toEditProductImageUrl.innerText = product.imageUrl;
  toEditProductImageUrl.setAttribute("class", "to-edit-product-image-url w-100");
  container.appendChild(toEditProductImageUrl);

  const toEditProductDescription = document.createElement("p");
  toEditProductDescription.innerText = product.description;
  toEditProductDescription.setAttribute("class", "to-edit-product-description");
  container.appendChild(toEditProductDescription);

}

getProducts()
  .then(data => {
    data.forEach(product => {
      createProductItem(product, settingProductsResultsContainer)
    })
  })

togglesettingsProductButton.addEventListener("change", async () => {
  const data = await getProducts();
  settingProductsResultsContainer.innerHTML = "";
  data.forEach(product => createProductItem(product, settingProductsResultsContainer));
});

settingProductsSearchInput.addEventListener("input", async () => {
  const data = await getProducts();
  settingProductsResultsContainer.innerHTML = "";
  filterProducts(data);
})

const deleteProduct = async (product) => {

  const URLData = "https://striveschool-api.herokuapp.com/api/product/"
  const productId = product._id

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

  settingProductsResultsContainer.innerHTML = ""

  updatedProducts.forEach(updatedProduct => createProductItem(updatedProduct, settingProductsResultsContainer))

}