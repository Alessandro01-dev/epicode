// ESERCIZIO 1
/*
const num1 = 30;
const num2 = 27;

function calcSum(a, b) {
  const result = a + b;
  return result;
}
console.log(calcSum(num1, num2));
*/

// ESERCIZIO 2
/*
const num1 = 16;
const num2 = 117;
function checkEvenNumber(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEvenNumber(num1));
console.log(checkEvenNumber(num2));
*/

// ESERCIZIO 3
/*
const str = 'epicode';
function displayThreeTimes(string) {
  console.log(string);
  console.log(string);
  console.log(string);
}
displayThreeTimes(str);
*/

// ESERCIZIO 4
/*
const a = 12;
function calcSquareNumber(num) {
  const result = num * num;
  return result;
}
console.log(calcSquareNumber(a));
*/

// ESERCIZIO 5
/*
const str = "this is a string";
function getStringLength(string) {
  const result = string.length;
  return result;
}
console.log(getStringLength(str));
*/

// ESERCIZIO 6
/*
const name = "Carlo";
function displayGreetingMessage(person) {
  const result = `Ciao, ${person}!`;
  return result;
};
console.log(displayGreetingMessage(name));
*/

// ============================

// ESERCIZIO 7
/*
const string = 'EpiCode';
function returnStringToLowerCase(str) {
  str = str.toLowerCase();
  return str
}
console.log(returnStringToLowerCase(string));
*/

// ESERCIZIO 8
/*
const string = 'stringcharacters';
function getFirstFiveCharactersInString(str) {
  str = str.slice(0, 5);
  return str;
}
console.log(getFirstFiveCharactersInString(string))
*/

// ESERCIZIO 9
/*
const string = 'Stringcharacters';
function getLastCharacterInString(str) {
  str = str.slice(-1);
  return str;
};
console.log(getLastCharacterInString(string));
*/

//ESERCIZIO 10
/*
const string = 'html css javascript';
function checkJavascriptInString(str) {
  if (str.includes("javascript")) {
    return true;
  } else {
    return false
  };
};
console.log(checkJavascriptInString(string));
*/

// ESERCIZIO 11
/*
const string = " This string will be console.logged out without spaces at the start and at the end "
function removeFirstAndLastSpaceInString(str) {
  if (str.startsWith(" ")) {
    str = str.replace(" ", "");
  }
  if (str.endsWith(" ")) {
    str = str.slice(0, -1);
  }

  // trasformo la stringa in array per verificare che gli spazi sono stati rimossi
  // const strArray = str.split(); 
  // return strArray;

  return str;
}
console.log(removeFirstAndLastSpaceInString(string))
*/

// ESERCIZIO 12
/*
const string = "javascript"
function replaceAWithAt(str) {
  str = str.replaceAll("a", "@");
  return str;
};
console.log(replaceAWithAt(string));
*/

// ESERCIZIO 13
/*
const num = [1, 2, 3, 4, 5, 6, 7, 8];

function returnElementsOfArray(arr){
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
returnElementsOfArray(num);
*/

// ESERCIZIO 14
/*
const myArr = [23, 43, 56, 64, 99, 700];
function calcSumOfArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(calcSumOfArray(myArr));
*/

// ESERCIZIO 15
/*
function getGreatestNumberInArray(arr) {
  let greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i]
    }
  }
  return greatest;
}
console.log(getGreatestNumberInArray([1, 2, 3, 4, 155, 5, 6, 56]));
*/

// ESERCIZIO 16
/*
const myNumArr = [5, 6, 3, 2, 5, 5, 4, 5]
const myStrArr = ["html", "css", "js", "html", "html", "html"];
function checkValueTimesInArray(arr, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      const times = 0;
      result.push(arr[i]);
    };
    times = result.length;
  };
  return times;
};
console.log(checkValueTimesInArray(myNumArr, 5));
console.log(checkValueTimesInArray(myStrArr, "html"));
*/

// ESERCIZIO 17
/*
const names = ["Carlo", "Eric", "Gianluca", "Pierluigi", "Filomena", "Mario", "Simone", "Dario"];
function getMoreThanFiveCharactersNames(arr) {
  const longerNames = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      longerNames.push(arr[i]);
    };
  };
  return longerNames;
};
console.log(getMoreThanFiveCharactersNames(names));
*/

// ESERCIZIO 18
/*
const numberArray = [1, 45, 2, 4, 33, 12, 54, 5, 15, 86, 8, 27, 10, 4, 7,];
function getEvenNumbersInArray(arr) {
  const evenNumbersArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbersArray.push(arr[i]);
    };
  };
  return evenNumbersArray;
};
console.log(getEvenNumbersInArray(numberArray));
*/

// ESERCIZIO 19
/*
const myNumArr = [3, 5, 12, 54, 23, 76, 42, 87];
const myStrArr = ["html", "css", "js"];
function reverseArray(arr) {
  let reversedArray = [];
  reversedArray = arr.reverse();
  return reversedArray;
};
console.log(reverseArray(myNumArr));
console.log(reverseArray(myStrArr));
*/

// ESERCIZIO 20
/*
const myNegativeNumber = -234;
const myZeroNumber = 0;
const myPositiveNumber = 32;
function checkPositiveNegativeZeroNumber(num) {
  let resultMessage = '';
  if (num < 0) {
    resultMessage = `${num} è un numero negativo`;
  } else if (num === 0) {
    resultMessage = `${num} è zero`;
  } else if (num > 0) {
    resultMessage = `${num} è un numero positivo`;
  }
  return resultMessage;
}
console.log(checkPositiveNegativeZeroNumber(myNegativeNumber));
console.log(checkPositiveNegativeZeroNumber(myZeroNumber));
console.log(checkPositiveNegativeZeroNumber(myPositiveNumber));
*/

// ESERCIZIO 21
/*
const age1 = 17;
const age2 = 22;
function checkAdultOrMinor(num) {
  let message = '';
  if (num >= 18) {
    message = 'maggiorenne';
  } else {
    message = 'minorenne';
  };
  return message;
}
console.log(checkAdultOrMinor(age1));
console.log(checkAdultOrMinor(age2));
*/

// ESERCIZIO 22
/*
const rating1 = 2;
const rating2 = 7;
const rating3 = 8;
const rating4 = 10;
function returnEvaluationFromRating(num) {
  let evaluation = "";
  if (num < 6) {
    evaluation = "insufficiente";
  } else if (num >= 6 && num < 8) {
    evaluation = "sufficiente";
  } else if (num >= 8 && num < 10) {
    evaluation = "buono";
  } else if (num === 10) {
    evaluation = "ottimo";
  };
  return evaluation;
}
console.log(returnEvaluationFromRating(rating1));
console.log(returnEvaluationFromRating(rating2));
console.log(returnEvaluationFromRating(rating3));
console.log(returnEvaluationFromRating(rating4));
*/

// ESERCIZIO 23
/*
const myFirstNumber = 123;
const mySecondNumber = 254;
function getGreaterNumber(num1, num2) {
  let greater = 0;
  if (num1 > num2) {
    greater = num1;
  } else {
    greater = num2;
  };
  return greater;
}
console.log(getGreaterNumber(myFirstNumber, mySecondNumber));
*/

// ESERCIZIO 24
/*
const myFirstNumber = 123;
const mySecondNumber = 543;
const myThirdNumber = 245;
function getSmallerFromThreeNumbers(num1, num2, num3) {
  let smaller = 0;
  if (num1 < num2 && num1 < num3) {
    smaller = num1;
  } else if (num2 < num1 && num2 < num3) {
    smaller = num2;
  } else {
    smaller = num3;
  }
  return smaller;
}
console.log(getSmallerFromThreeNumbers(myFirstNumber, mySecondNumber, myThirdNumber));
*/

// ESERCIZIO 25
/*
const myFirstStr = "";
const mySecondStr = "html";
function checkIfEmptyString(string) {
  if (string === "") {
    console.log("Your string is empty");
  } else {
    console.log("Your string is full");
  }
}
checkIfEmptyString(myFirstStr);
checkIfEmptyString(mySecondStr);
*/

// ESERCIZIO 26
/*
const titleElement = document.getElementById("title");

function changeTextTitle() {
  titleElement.innerText = "New Title";
}
changeTextTitle();
*/

// ESERCIZIO 27
/*
const divElement = document.getElementById("container");
function addParagraphInDivElement() {
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = "This is a paragraph";
  divElement.appendChild(paragraphElement);
};
addParagraphInDivElement();
*/

// ESERCIZIO 28
/*
function changeBodyBgColor() {
  document.body.style.backgroundColor = "rgb(0, 0, 255)";
}
changeBodyBgColor()
*/

// ESERCIZIO 29
/*
const boxElement = document.getElementById("box");

function hideElement() {
  boxElement.style.visibility = "hidden";
};
hideElement();
*/

// ESERCIZIO 30
/*
const listElement = document.getElementById("list");
function addListItemInList() {
  const listItem = document.createElement("li");
  listItem.innerText = "This is a list item";
  listElement.appendChild(listItem);
};
addListItemInList();
*/

// ESERCIZIO 31
/*
const buttonElement = document.getElementById("showMessage");
function showAlertMessage() {
    alert("Clicked!");
};
buttonElement.addEventListener("click", showAlertMessage);
*/

// ESERCIZIO 32
/*
const inputElement = document.getElementById("nameInput");

inputElement.addEventListener("keypress", (event) => {
  console.log(event.key);
});
*/

// ESERCIZIO 33
/*
const formElement = document.getElementById("myForm");

function interceptForm() {
  formElement.addEventListener("click", (event) => {
    event.preventDefault();
  });
  alert("Form submitted!");
};
interceptForm();
*/

// ESERCIZIO 34
/*
const buttonElement = document.getElementById("changeColor");
const paragraphElement = document.getElementById("paragraph");

function changeParagraphColor() {
  paragraphElement.style.color = "red";
};
buttonElement.addEventListener("click", changeParagraphColor);
*/

// ESERCIZIO 35
/*
const checkboxElement = document.getElementById("agree");
function displayAgreeMessage() {
  if (checkboxElement.checked) {
    alert("You agreed!");
  }
};
checkboxElement.addEventListener("click", displayAgreeMessage);
*/

// ESERCIZIO 36 (RICONTROLLARE) DOCUMENT IS NOT DEFINED ERROR (in node.js)
/*
const inputElement = document.getElementById("email");

inputElement.addEventListener("focus", () => {
  inputElement.style.borderColor = "blue";
});

inputElement.addEventListener("blur", () => {
  inputElement.style.border = "1px solid rgb(118, 118, 118)";
});
*/

// ESERCIZIO 37
/*
const selectElement = document.getElementById("language");
const optionElements = document.querySelectorAll("#language option")
const outputElement = document.getElementById("output")
function getAndDisplayOptionValue() {
  for (let i = 0; i < optionElements.length; i++) {
    selectElement.addEventListener("change", (event) => {
      outputElement.innerText = event.target.value;
    });
  };
};
getAndDisplayOptionValue();
*/

// ESERCIZIO 38
/*
const buttonElement = document.getElementById("addItem");
const myListElement = document.getElementById("myList");
function addNewListItem() {
  const listItemElement = document.createElement("li");
  listItemElement.innerText = "New item";
  myListElement.appendChild(listItemElement);
};
buttonElement.addEventListener("click", addNewListItem);
*/

// ESERCIZIO 39
/*
const buttonElement = document.getElementById("resetForm");
const formInputElements = document.getElementById("userForm");
function resetForm() {
  formInputElements.reset();
};
buttonElement.addEventListener("click", resetForm);
*/

// ESERCIZIO 40 (MODIFICARE: STAMPARE AL SUBMIT DEL FORM)
/*
const registerFormElement = document.getElementById("registerForm");
const usernameInputElement = document.getElementById("username");
const resultParagraphElement = document.getElementById("result");
function getAndDisplayInputValueInResult() {
  registerFormElement.addEventListener("input", () => {
    resultParagraphElement.innerText = usernameInputElement.value;
  });
};
getAndDisplayInputValueInResult();
*/

// ESERCIZIO 41
/*
const actionButtons = document.querySelectorAll(".action-button");
actionButtons.forEach(actionButton => {
  actionButton.addEventListener("click", () => {
    alert(actionButton.innerText);
  });
});
*/

// ESERCIZIO 42
/*
const removeParentButton = document.querySelector(".remove");
function removeParentElement() {
  removeParentButton.addEventListener("click", () => {
    removeParentButton.parentNode.remove();
  });
};
removeParentElement();
*/

// ESERCIZIO 43
/*
const imageElement = document.getElementById("image");

const tooltipMessage = document.createElement("div");

function displayTooltipMessage() {
  tooltipMessage.innerText = "tooltip";
  imageElement.after(tooltipMessage);
};

function removeTooltipMessage() {
  tooltipMessage.remove();
}

imageElement.addEventListener("mouseenter", displayTooltipMessage);
imageElement.addEventListener("mouseleave", removeTooltipMessage);
*/

// ESERCIZIO 44
/*
const submitBtnElement = document.getElementById("submitBtn");
const textFieldElement = document.getElementById("textField");

function enableSubmitBtnForm() {
  submitBtnElement.disabled = true;
  textFieldElement.addEventListener("input", () => {
    if (!textFieldElement.value) {
      submitBtnElement.disabled = true;
    } else {
      submitBtnElement.disabled = false;
    }
  })
};
enableSubmitBtnForm();
*/

// ESERCIZIO 45
/*
const sliderInputElement = document.getElementById("slider");
const spanSliderValueElement = document.getElementById("sliderValue");
console.log(sliderInputElement)
function getAndDisplaySliderInputValue() {
  sliderInputElement.addEventListener("input", () => {
    spanSliderValueElement.innerText = sliderInputElement.value;
  })
};
getAndDisplaySliderInputValue();
*/