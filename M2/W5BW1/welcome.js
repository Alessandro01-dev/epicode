const btnWelcome = document.getElementById("btn-welcome")
const checkbox = document.getElementById("checkbox")

function validateProcced () {
    if (checkbox.checked===true) {window.location.href = './quiz.html'
    }else{
        alert("Check the permissions")
    }
}

btnWelcome.addEventListener("click", validateProcced)