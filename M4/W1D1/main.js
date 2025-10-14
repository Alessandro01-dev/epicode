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
};

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
const myNum1 = 30;
const myNum2 = 75;

function checkIfTwoNumbersAreWithinARange(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    return true;
  } else if (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) {
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

// ESERCIZIO 1
/*
const myStr1 = "Protocollo";
const myStr2 = "Stringa con tanti spazi e molte parole";

function returnsTheMostFrequentCharacter(str) {

  str = str.replaceAll(" ", "").toLowerCase();

  let charCounts = {};
  let maxStrChar = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!charCounts[char]) {
      charCounts[char] = 0;
    }
    charCounts[char]++;

    console.log(charCounts)

    if (maxStrChar === '' || charCounts[char] > charCounts[maxStrChar]) {
      maxStrChar = char;
    };

  };

  return maxStrChar + ": " + charCounts[maxStrChar] + " times";

};

console.log(returnsTheMostFrequentCharacter(myStr1));
console.log(returnsTheMostFrequentCharacter(myStr2));
*/

// ESERCIZIO 2
/*
const myStr1 = "cart,$#!ine";
const myStr2 = "carent!)%|,i";
const myStr3 = "esp*atri=%o";

function checkIfTwoStringsAreAnagram(str1, str2) {

  const x = str1.toLowerCase().split("").sort().join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|]/g,"");
  const y = str2.toLowerCase().split("").sort().join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|]/g,"");

  if (x === y) {
    return true;
  } else {
    return false;
  };
};

console.log(checkIfTwoStringsAreAnagram(myStr1, myStr2));
console.log(checkIfTwoStringsAreAnagram(myStr1, myStr3));
*/

// ESERCIZIO 3
/*
const myStr = "cartine";
const myArray = ["carenti", "incerta", "espatrio"];

function returnArrayWithAnagramsFromAString(str, arr) {

  let resultArray = [];

  const x = str.toLowerCase().split("").sort().join();

  for (let i = 0; i < arr.length; i++) {
    const y = arr[i].toLowerCase().split("").sort().join();

    if (x === y) {
      resultArray.push(arr[i]);
    };

  };

  return resultArray;

};

console.log(returnArrayWithAnagramsFromAString(myStr, myArray));
*/

// ESERCIZIO 4
/*
const myStr = "Anna";

function checkIfAStringIsPalindrome(str) {
  const str1 = str.toLowerCase();
  const reverseString = str.toLowerCase().split("").reverse().join("");

  if (str1 === reverseString) {
    return true;
  } else {
    return false
  }

};

console.log(checkIfAStringIsPalindrome(myStr));
*/

// ESERCIZIO 5
/*
const myNum = 189;

function returnReversedNumber(num) {
  const newNum = num.toString().split("").reverse().join("");

  return newNum;
};

console.log(returnReversedNumber(myNum));
*/

// ESERCIZIO 6
/*
const myNum = 5;

function printHashKeyStairsFromANumber(num) {

  for (let i = 1; i <= num; i++) {
    console.log("#".repeat(i));
  };

};

printHashKeyStairsFromANumber(myNum);
*/

// ESERCIZIO 7
/*
const myString = "Ciao"

function returnReversedString(str) {

  const reversedString = str.split("").reverse().join("");

  return reversedString;

};

console.log(returnReversedString(myString));
*/

// ESERCIZIO 8
/*
const myArray = [1, 2, 3, 2, 3, 4, 5, 6, 4, 7, 3, 3];
const myNumber = 6;

function returnChunckedArray(arr, y) {

  const chunkedArray = [];
  const subArrayLength = arr.length / y;

  for (let i = 0; i < arr.length; i += subArrayLength) {
    chunkedArray.push(arr.slice(i, i + subArrayLength));
  };

  return chunkedArray;

};
console.log(returnChunckedArray(myArray, myNumber));
*/

// ESERCIZIO 9
/*
const myNum = 12;

function printPyramidFromANumber(num) {
  for (let i = 1; i <= num; i++) {
    const spaces = ' '.repeat(num - i);
    const hashKeys = '#'.repeat(2 * i - 1);
    console.log(spaces + hashKeys + spaces);
  };
};

printPyramidFromANumber(myNum);
*/

// ESERCIZIO 10
/*
let myNum = 6;

function generateSpiralMatrix(n) {

  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {

    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    };
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    };
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    };
    startColumn++;

  };

  return results;

};
console.log(generateSpiralMatrix(myNum));
*/