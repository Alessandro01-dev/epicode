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

  const userListItem = document.createElement("li");
  userListItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
  container.appendChild(userListItem);

  const userListItemName = document.createElement("p");
  userListItemName.innerText = user.name;
  userListItemName.classList.add("m-0");
  userListItem.appendChild(userListItemName);

  const userListItemUsername = document.createElement("p");
  userListItemUsername.innerText = user.username;
  userListItemUsername.classList.add("m-0");
  userListItem.appendChild(userListItemUsername);

  const userListItemEmail = document.createElement("p");
  userListItemEmail.innerText = user.email;
  userListItemEmail.classList.add("m-0");
  userListItem.appendChild(userListItemEmail);

  if (searchOption === "name") {
    userListItemName.classList.add("focused-list-item");
  } else if (searchOption === "username") {
    userListItemUsername.classList.add("focused-list-item");
  } else if (searchOption === "email") {
    userListItemEmail.classList.add("focused-list-item");
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