const searchInput = document.getElementById("search-input");
const resultsContainer = document.querySelector(".results-container");
const searchOptionElements = document.querySelectorAll(".search-by-option");
const selectOptionButton = document.querySelector(".select-option-button");

let searchOption = "name";

searchOptionElements.forEach(searchOptionElement => {

  searchOptionElement.addEventListener("click", () => {

    searchOption = searchOptionElement.dataset.option;

    selectOptionButton.innerText = searchOptionElement.innerText;

  })
})

const getUsers = async () => {
  const URLData = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(URLData);
  return await response.json();
}

const filterUsers = (arr) => {

  resultsContainer.innerHTML = "";

  const inputValue = searchInput.value.toLowerCase();

  const results = arr.filter(user =>
    user[`${searchOption}`].toLowerCase().includes(inputValue)
  );

  results.forEach(user => {
    createUserItem(user, resultsContainer);
  });
};

const createUserItem = (user, container) => {

  const userRowItem = document.createElement("tr");
  container.appendChild(userRowItem);

  const userIdTableHeader = document.createElement("th");
  userIdTableHeader.setAttribute("scope", "row");
  userIdTableHeader.innerText = user.id;
  userRowItem.appendChild(userIdTableHeader);

  const userNameTableData = document.createElement("td");
  userNameTableData.innerText = user.name;
  userRowItem.appendChild(userNameTableData);

  const userUsernameTableData = document.createElement("td");
  userUsernameTableData.innerText = user.username;
  userRowItem.appendChild(userUsernameTableData);

  const userEmailTableData = document.createElement("td");
  userEmailTableData.innerText = user.email;
  userRowItem.appendChild(userEmailTableData);

  if (searchOption === "name") {
    userNameTableData.classList.add("text-decoration-underline", "text-success");
  } else if (searchOption === "username") {
    userUsernameTableData.classList.add("text-decoration-underline", "text-success");
  } else if (searchOption === "email") {
    userEmailTableData.classList.add("text-decoration-underline", "text-success");
  }
}

getUsers()
  .then(data => {
    data.forEach(user => {
      createUserItem(user, resultsContainer)
    })
  })

searchInput.addEventListener("input", async () => {
  const data = await getUsers();
  resultsContainer.innerHTML = "";
  filterUsers(data);
})