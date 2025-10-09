// ESERCIZIO 1
/* 
const myNum1 = 25;
const myNum2 = 50;
const myNum3 = 17;
const myNum4 = 33;
const myNum5 = 25;
const myNum6 = 28;

function checkIfFiftyValueNumAndFiftySumNum(num1, num2) {
  if (num1 === 50 || num2 === 50) {
    return true;
  } else if (num1 + num2 === 50) {
    return true;
  } else {
    return false
  };
}

console.log(checkIfFiftyValueNumAndFiftySumNum(myNum1, myNum2));
console.log(checkIfFiftyValueNumAndFiftySumNum(myNum3, myNum4));
console.log(checkIfFiftyValueNumAndFiftySumNum(myNum5, myNum6));
*/

// ESERCIZIO 2
/*
const myString = 'Helalo';
const myCharacterIndex = 3;

function removeCharAtXPositionFromString(str, num) {

  const newStr = str.slice(0, num) + str.slice(num + 1);

  return newStr;
};

console.log(removeCharAtXPositionFromString(myString, myCharacterIndex));
*/

// ESERCIZIO 3
/*
const myNum1 = 2;
const myNum2 = 65;

function checkIfTwoNumbersAreWithinARange(num1, num2) {
  if (num1 >= 40 && num1 <= 60 || num1 >= 70 && 100) {
    return true;
  } else if (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100) {
    return true;
  } else {
    return false;
  };
};

console.log(checkIfTwoNumbersAreWithinARange(myNum1, myNum2));
*/

// ESERCIZIO 4
/*
const myFirstCityName = 'Los Angeles';
const mySecondCityName = 'New York';
const myThirdCityName = 'London';

function checkIfACityNameStartsWithLosOrNew(cityName) {
  if (cityName.startsWith('Los') || cityName.startsWith('New')) {
    return cityName; 
  } else {
    return false;
  };
};

console.log(checkIfACityNameStartsWithLosOrNew(myFirstCityName));
console.log(checkIfACityNameStartsWithLosOrNew(mySecondCityName));
console.log(checkIfACityNameStartsWithLosOrNew(myThirdCityName));
*/

// ESERCIZIO 5
/*
const myArray = [6, 8, 5, 24, 32];

function sumNumbersOfAnArray(arr) {
  let sumOfArr = 0;

  for (i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
  }

  return sumOfArr;
};

console.log(sumNumbersOfAnArray(myArray));
*/

// ESERCIZIO 6
/*
const myArray = [22, 14, 52, 81, 24, 3, 100, 73];

function checkIfAnArrayDoesntContainsOneOrThree(arr) {
 if (!arr.includes(1) || !arr.includes(3)) {
  return true;
 } else {
  return false;
 };
};

console.log(checkIfAnArrayDoesntContainsOneOrThree(myArray));
*/

// ESERCIZIO 7
/*
const angle1 = 45;
const angle2 = 95;
const angle3 = 90;
const angle4 = 180;

function showAnglesCategoryByDegrees(deg) {
  if (deg === 90) {
    return "retto";
  } else if (deg === 180) {
    return "piatto";
  } else if (deg < 90) {
    return "acuto";
  } else if (deg > 90 && deg < 180) {
    return "ottuso";
  };
};

console.log(showAnglesCategoryByDegrees(angle1));
console.log(showAnglesCategoryByDegrees(angle2));
console.log(showAnglesCategoryByDegrees(angle3));
console.log(showAnglesCategoryByDegrees(angle4));
*/

// ESERCIZIO 8
/*
const myStr1 = "Fabbrica Italiana Automobili Torino";
const myStr2 = "Azienda Sanitaria Locale";
const myStr3 = "Unione Europea";

function getStringAndReturnAcronym(str) {

  return str
    .split(" ")
    .map(word => word.charAt(0))
    .join("");

};

console.log(getStringAndReturnAcronym(myStr1));
console.log(getStringAndReturnAcronym(myStr2));
console.log(getStringAndReturnAcronym(myStr3));
*/

// =================== ESERCIZI EXTRA ===================

// ESERCIZIO 1 (da completare)
const myStr1 = "Italiana";
const myStr2 = "Protocollo";

function returnsTheMostFrequentCharacter(str) {
  return str
    .toLowerCase()
    .split("")
    
}

console.log(returnsTheMostFrequentCharacter(myStr1));
console.log(returnsTheMostFrequentCharacter(myStr2));