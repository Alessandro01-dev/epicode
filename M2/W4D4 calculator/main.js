const buttons = document.querySelectorAll("button")
const resultDisplay = document.querySelector(".result-display")

function displayValue(value) {
  if (value === '.' || resultDisplay.innerText.includes(".")) {
    resultDisplay.innerText += value;
  } else {
    resultDisplay.innerText = resultDisplay.innerText.replace(/^0+/, "") + value;
  }
}

function calc() {
  try {
    const result = eval(resultDisplay.innerText);
    resultDisplay.innerText = result.toFixed(2);
  } catch {
    resultDisplay.innerText = 'Error';
  }
}

/* LOGICA PRECEDENTE:
function deleteFirstZeroNumber(value) {
  resultDisplay.innerText = value;
}

buttons.forEach(button => {
  const buttonValue = button.getAttribute('data-value');
  button.addEventListener("click", () => {
    if (buttonValue === 'AC') {
      resultDisplay.innerText = '';
    } else if (buttonValue === '=') {
      calc();
    } else if (buttonValue === '.' && resultDisplay.innerText.charAt(0) === '0') {
      displayValue(buttonValue);
    } else if (resultDisplay.innerText.charAt(1) !== '.' && resultDisplay.innerText.charAt(0) === '0') {
      deleteFirstZeroNumber(buttonValue);
    } else {
      displayValue(buttonValue);
    }
  })
});
*/

// LOGICA CON IL METODO REPLACE():

buttons.forEach(button => {
  const buttonValue = button.getAttribute('data-value');
  button.addEventListener("click", () => {
    if (buttonValue === 'AC') {
      resultDisplay.innerText = '';
    } else if (buttonValue === '=') {
      calc();
    } else {
      displayValue(buttonValue);
    }
  })
});