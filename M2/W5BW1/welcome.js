const btnWelcome = document.getElementById("btn-welcome")
const checkbox = document.getElementById("checkbox")

function validateProcced () {
    if (checkbox.checked===true) {window.location.href = './quiz.html'
    }else{
        alert("Please accept the terms and conditions to continue.")
    }
}

btnWelcome.addEventListener("click", validateProcced)
