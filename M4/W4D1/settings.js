const settingProductsSearchInput = document.getElementById("setting-products-search-input");
const settingProductsResultsContainer = document.querySelector(".setting-products-results-container");
const searchOptionElements = document.querySelectorAll(".search-by-option");
const selectOptionButton = document.querySelector(".select-option-button");
const togglesettingsProductButton = document.querySelector(".toggle-switch-button");

const addNewProductIcon = document.querySelector(".add-product-icon");

addNewProductIcon.addEventListener("click", () => {
  window.location.href = "addNewProduct.html"
})


const getProducts = async () => {

  const URLData = "https://striveschool-api.herokuapp.com/api/product/"

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
    settingsProductRemoveButton.innerText = "Remove";
    settingsProductRemoveButton.dataset.id = product._id
    settingsProductButtonContainer.appendChild(settingsProductRemoveButton);

    settingsProductRemoveButton.addEventListener("click", deleteProduct)

  } else if (togglesettingsProductButton.checked) {

    const settingsProductEditButton = document.createElement("button");
    settingsProductEditButton.setAttribute("class", "settings-product-edit-button");
    settingsProductEditButton.innerText = "Edit";
    settingsProductEditButton.dataset.id = product._id
    settingsProductButtonContainer.appendChild(settingsProductEditButton);

  }
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

const deleteProduct = async (event) => {

  const URLData = "https://striveschool-api.herokuapp.com/api/product/"
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

  settingProductsResultsContainer.innerHTML = ""

  updatedProducts.forEach(updatedProduct => createProductItem(updatedProduct, settingProductsResultsContainer))

}