// 1. Sum of Elements: Write a program that calculates the sum of all elements in an array of numbers.
// Example Input:
// Array: [1, 2, 3, 4, 5]
// Example Output:
// Sum: 15

document.getElementById("input1").value = "1, 2, 3, 4, 5";

const output1 = document.getElementById("output1");
const button1 = document.getElementById("button1");

button1.addEventListener("click", sumOfElements);

function sumOfElements() {
  let input1 = document.getElementById("input1");
  let arraySum = input1.value.split(",");
  let sum = 0;
  for (let i = 0; i <= arraySum.length - 1; i++) {
    sum += Number(arraySum[i].trim());
  }

  output1.textContent = "Sum: " + sum;
}

// 2. Average of Elements: Calculate the average of elements in an array of numbers.
// Example Input:
// Array: [10, 20, 30, 40, 50]
// Example Output:
// Average: 30

document.getElementById("input2").value = "10, 20, 30, 40, 50";

const output2 = document.getElementById("output2");
const button2 = document.getElementById("button2");

button2.addEventListener("click", averageOfElements);

function averageOfElements() {
  let input2 = document.getElementById("input2");
  let arrayAverage = input2.value.split(",");
  let sum = 0;
  for (let i = 0; i <= arrayAverage.length - 1; i++) {
    sum += Number(arrayAverage[i].trim());
  }
  let average = sum / arrayAverage.length;

  output2.textContent = "Average: " + average;

  console.log("Average: %f", average);
}

// 3. Finding the Smallest/Largest Element: Find the smallest and largest element in an array of numbers.
// Example Input:
// Array: [8, 2, 7, 3, 11]
// Example Output:
// Smallest: 2
// Largest: 11

document.getElementById("input3").value = "8, 2, 7, 3, 11";

const outputMin = document.getElementById("outputMin");
const outputMax = document.getElementById("outputMax");
const button3 = document.getElementById("button3");

button3.addEventListener("click", findMinMaxElem);

function findMinMaxElem() {
  let input3 = document.getElementById("input3");
  let array = input3.value.split(",");
  let min = array[0];
  let max = array[0];

  for (let i = 1; i <= array.length - 1; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  outputMin.textContent = "Smallest: " + min;
  outputMax.textContent = "Largest: " + max;

  // console.log("Smallest: %f", min);
  // console.log("Largest: %f", max);
}

// 4. Reverse an Array: Create a function that reverses an array of elements.
// Example Input:
// Array: [1, 2, 3, 4, 5]
// Example Output:
// Reversed Array: [5, 4, 3, 2, 1]

document.getElementById("input4").value = "1, 2, 3, 4, 5";

const output4 = document.getElementById("output4");
const button4 = document.getElementById("button4");

button4.addEventListener("click", reverseAnArray);

function reverseAnArray(array) {
  let input4 = document.getElementById("input4");
  let reversedArray = input4.value.split(",");
  let elem = 0;
  let lastElem = reversedArray.length - 1;

  for (let i = 0; i < (reversedArray.length - 1) / 2; i++) {
    elem = reversedArray[i];
    reversedArray[i] = reversedArray[lastElem];
    reversedArray[lastElem] = elem;
    lastElem -= 1;
  }

  output4.textContent = "Reversed Array: " + reversedArray;
}

// 5. Search for an Element: Write a program that searches for a specific element in an array and returns its position or an error message if the element is not
// found.
// Example Input:
// Array: [10, 20, 30, 40, 50]
// Element to find: 30
// Example Output:
// Element found at position 2.

document.getElementById("inputArray").value = "1, 2, orange, 4, 5";
document.getElementById("inputElem").value = "Orange";

const output5 = document.getElementById("output5");
const button5 = document.getElementById("button5");

button5.addEventListener("click", searchElem);

function searchElem() {
  let searchedArray = document.getElementById("inputArray").value.split(",");
  let searchElem = document.getElementById("inputElem").value;

  let position;

  for (let i = 0; i <= searchedArray.length - 1; i++) {
    if (
      searchedArray[i].trim().toLowerCase() === searchElem.trim().toLowerCase()
    ) {
      position = i;
    }
  }

  if (position !== undefined) {
    output5.textContent = "Element found at position " + position;
  } else {
    output5.textContent = "Element could not be found.";
  }
}

// 6. Working with Strings:
// Counting Characters: Write a program that counts how many characters of a specific type (e.g., uppercase letters) are in a given string.
// Example Input:
// String: "Hello World"
// Type of characters to count: Uppercase letters
// Example Output:
// Number of uppercase letters: 2

document.getElementById("input6").value = "Hello WorLd";

const output6 = document.getElementById("output6");
const button6 = document.getElementById("button6");

button6.addEventListener("click", countingCharacters);

function countingCharacters() {
  let inputString = document.getElementById("input6").value;

  let count = 0;

  for (let i = 0; i <= inputString.length - 1; i++) {
    if (inputString[i] >= "A" && inputString[i] <= "Z") {
      count++;
    }
  }
  output6.textContent = "Number of uppercase letters: " + count;
}

// 7. Palindrome Check: Check if a given string is a palindrome (reads the same forwards and backward).
// Example Input:
// String: "racecar"
// Example Output:
// The string "racecar" is a palindrome.

document.getElementById("input7").value = "racecar";

const output7 = document.getElementById("output7");
const button7 = document.getElementById("button7");

button7.addEventListener("click", palindromeCheck);

function palindromeCheck() {
  let inpString = document.getElementById("input7").value;
  let i = 0;
  let j = inpString.length - 1;

  while (i < j) {
    if (inpString[i] !== inpString[j]) {
      output7.textContent = "The string is not a palindrome.";
      return;
    }
    i++;
    j--;
  }
  output7.textContent = "The string is a palindrome.";
}

// 8. Reverse a String: Create a function that reverses a given string.
// Example Input:
// String: "javascript"
// Example Output:
// Reversed String: "tpircsavaj"

document.getElementById("input8").value = "javascript";

const output8 = document.getElementById("output8");
const button8 = document.getElementById("button8");

button8.addEventListener("click", reversedString);

function reversedString() {
  let stringToRev = document.getElementById("input8").value;
  let reversedString = [];

  for (let i = stringToRev.length - 1; i >= 0; i--) {
    reversedString.push(stringToRev[i]);
  }

  output8.textContent = "Reversed string: " + reversedString.join("");
}

// 9. Removing Whitespace: Remove all whitespace from a given string.
// Example Input:
// String: "  Hello   World  "
// Example Output:
// Modified String: "HelloWorld"

document.getElementById("input9").value = "  Hello   World  ";

const output9 = document.getElementById("output9");
const button9 = document.getElementById("button9");

button9.addEventListener("click", removeWhitespaces);

function removeWhitespaces() {
  let stringToClean = document.getElementById("input9").value;

  let modifiedString = [];

  for (let i = 0; i <= stringToClean.length - 1; i++) {
    if (stringToClean[i] !== " ") {
      modifiedString.push(stringToClean[i]);
    }
  }

  output9.textContent = "Modified String: " + modifiedString.join("");
}

// 10. Checking for Substrings: Write a program that checks if a given string contains a specific substring.
// Example Input:
// String: "JavaScript is a powerful language"
// Substring to check for: "powerful"
// Example Output:
// The string contains the substring "powerful."

// string = "JavaScript is a powerful language";
// let substring = "powerfull";

// checkForSubstrings(string, substring);

document.getElementById("inputStr").value = "JavaScript is a powerful language";
document.getElementById("inputSubstr").value = "powerful";

const output10 = document.getElementById("output10");
const button10 = document.getElementById("button10");

button10.addEventListener("click", checkForSubstrings);

function checkForSubstrings() {
  let inputString = document.getElementById("inputStr").value;
  let inputSubstring = document.getElementById("inputSubstr").value;

  const M = inputSubstring.length;
  const N = inputString.length;

  for (let i = 0; i <= N - M; i++) {
    // console.log("i: " + inputString[i]);
    let j;
    for (j = 0; j < M; j++) {
      if (inputString[i + j] != inputSubstring[j]) break;
      // console.log("j: " + substring[j]);
    }

    if (j === M) {
      output10.textContent =
        "The string contains the substring " + inputSubstring;
      return;
    }
  }

  output10.textContent =
    "The string doesn't contain the substring " + inputSubstring;
}

// 11. Using Loops (for and while): Multiplication Table: Display the multiplication table for a given number using a for loop.
// Example Input:
// Number: 7
// Example Output:
// Multiplication Table for 7:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70

document.getElementById("input11").value = 7;

const output11 = document.getElementById("output11");
const button11 = document.getElementById("button11");

button11.addEventListener("click", multiplicationTable);

function multiplicationTable() {
  output11.innerHTML = "";

  let num = document.getElementById("input11").value;
  let i = 1;

  while (i <= 10) {
    let result = num * i;

    let resultItem = document.createElement("p");
    resultItem.textContent = num + " x " + i + " = " + result;
    output11.appendChild(resultItem);
    i++;
  }
}

// 12. Prime Numbers: Find all prime numbers up to a given number using a for loop.
// Example Input:
// Limit: 20
// Example Output:
// Prime numbers up to 20: 2, 3, 5, 7, 11, 13, 17, 19

// let limit = 20;

// nPrimeNumbers(limit);

document.getElementById("input12").value = 20;

const output12 = document.getElementById("output12");
const button12 = document.getElementById("button12");

button12.addEventListener("click", nPrimeNumbers);

function nPrimeNumbers() {
  let listPrimeNum = [];
  let limit = document.getElementById("input12").value;

  for (let num = 1; num <= limit; num++) {
    if (isPrime(num)) {
      listPrimeNum.push(num);
    }
  }

  output12.textContent = "Prime numbers up to " + limit + ": " + listPrimeNum;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i == 0) return false;
    i++;
  }
  return true;
}

// 13. Fibonacci Series: Display the first n numbers in the Fibonacci series using a for loop.
// Example Input:
// Count: 8
// Example Output:
// Fibonacci Series (first 8 numbers): 0, 1, 1, 2, 3, 5, 8, 13

// count = 8;

// nFibonacciNumbers(count);

document.getElementById("input13").value = 8;

const output13 = document.getElementById("output13");
const button13 = document.getElementById("button13");

button13.addEventListener("click", nFibonacciNumbers);

function nFibonacciNumbers(count) {
  let counter = document.getElementById("input13").value;
  let a = 0;
  let b = 1;
  let i = 0;
  let list = [];

  while (i < counter) {
    list.push(a);
    const temp = a + b;
    a = b;
    b = temp;
    i++;
  }

  output13.textContent =
    "Fibonacci Series (first " + counter + " numbers):" + list;
}
