const modalUsernameInput = document.getElementById("modal-username");
const modalPasswordInput = document.getElementById("modal-password");

const modalUsernameInputInvalidFeedback = document.getElementById("modal-username-invalid-feedback");
const modalPasswordInputInvalidFeedback = document.getElementById("modal-password-invalid-feedback");

const modalForm = document.querySelector("form")



const validateModalUsername = () => {

  const modalUsernameInputValue = modalUsernameInput.value.trim()
  const validName = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/

  if (modalUsernameInputValue === "") {
    modalUsernameInputInvalidFeedback.classList.remove("d-none")
    modalUsernameInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    modalUsernameInput.classList.add("is-invalid")
    return false
  } else if (!validName.test(modalUsernameInputValue)) {
    modalUsernameInputInvalidFeedback.classList.remove("d-none")
    modalUsernameInputInvalidFeedback.innerText = `${modalUsernameInput.value} is not a valid username.`
    modalUsernameInput.classList.add("is-invalid")
    return false
  } else {
    modalUsernameInputInvalidFeedback.classList.add("d-none")
    modalUsernameInput.classList.remove("is-invalid")
    modalUsernameInput.classList.add("is-valid")
    return true
  }

}

modalUsernameInput.addEventListener("input", validateModalUsername)


const validateModalPassword = () => {

  const modalPasswordInputValue = modalPasswordInput.value.trim()
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  if (modalPasswordInputValue === "") {
    modalPasswordInputInvalidFeedback.classList.remove("d-none")
    modalPasswordInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    modalPasswordInput.classList.add("is-invalid")
    return false
  } else if (!validPassword.test(modalPasswordInputValue)) {
    modalPasswordInputInvalidFeedback.classList.remove("d-none")
    modalPasswordInputInvalidFeedback.innerText = "The password must have minimum eight characters, at least one letter, one number and one special character (@$!%*#?&)"
    modalPasswordInput.classList.add("is-invalid")
    return false
  } else {
    modalPasswordInputInvalidFeedback.classList.add("d-none")
    modalPasswordInput.classList.remove("is-invalid")
    modalPasswordInput.classList.add("is-valid")
    return true
  }

}

modalPasswordInput.addEventListener("input", validateModalPassword)

const validateForm = () => {

  if (validateModalUsername() && validateModalPassword()) {

    return true

  } else {

    return false

  }

}

modalForm.addEventListener("submit", (e) => {

  e.preventDefault()

  if (validateForm() && modalUsernameInput.value === "Admin" && modalPasswordInput.value === "Admin123!!!") {

    window.location.href = "./settings.html"

    modalForm.reset()

  } else {

    alert("Invalid username or password")

    modalForm.reset()

  }

})