const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }

  return new_nums;
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }

  return new_nums;
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// Measure execution time for doublerAppend with different array sizes
perf.start();
doublerAppend(tinyArray);
const tinyArrayTime = perf.stop().time;

perf.start();
doublerAppend(smallArray);
const smallArrayTime = perf.stop().time;

perf.start();
doublerAppend(mediumArray);
const mediumArrayTime = perf.stop().time;

perf.start();
doublerAppend(largeArray);
const largeArrayTime = perf.stop().time;

perf.start();
doublerAppend(extraLargeArray);
const extraLargeArrayTime = perf.stop().time;

console.log("doublerAppend execution times:");
console.log("Tiny Array:", tinyArrayTime.toFixed(6), "ms");
console.log("Small Array:", smallArrayTime.toFixed(6), "ms");
console.log("Medium Array:", mediumArrayTime.toFixed(6), "ms");
console.log("Large Array:", largeArrayTime.toFixed(6), "ms");
console.log("Extra Large Array:", extraLargeArrayTime.toFixed(6), "ms");

// Measure execution time for doublerInsert with different array sizes
perf.start();
doublerInsert(tinyArray);
const tinyArrayTimeInsert = perf.stop().time;

perf.start();
doublerInsert(smallArray);
const smallArrayTimeInsert = perf.stop().time;

perf.start();
doublerInsert(mediumArray);
const mediumArrayTimeInsert = perf.stop().time;

perf.start();
doublerInsert(largeArray);
const largeArrayTimeInsert = perf.stop().time;

perf.start();
doublerInsert(extraLargeArray);
const extraLargeArrayTimeInsert = perf.stop().time;

console.log("\ndoublerInsert execution times:");
console.log("Tiny Array:", tinyArrayTimeInsert.toFixed(6), "ms");
console.log("Small Array:", smallArrayTimeInsert.toFixed(6), "ms");
console.log("Medium Array:", mediumArrayTimeInsert.toFixed(6), "ms");
console.log("Large Array:", largeArrayTimeInsert.toFixed(6), "ms");
console.log("Extra Large Array:", extraLargeArrayTimeInsert.toFixed(6), "ms");

// Try it with first function
perf.start(); // Starts timer
doublerAppend(sumZero);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(sumZero);
let resultsInsert = perf.stop();

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Function to check if any two numbers in the array sum to zero
function addToZero(arr) {
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const oppositeNum = -currentNum;

    if (numSet.has(oppositeNum)) {
      return true;
    }

    numSet.add(currentNum);
  }

  return false;
}

// Test cases
console.log(addToZero([])); // -> False
console.log(addToZero([1])); // -> False
console.log(addToZero([1, 2, 3])); // -> False
console.log(addToZero([1, 2, 3, -2])); // -> True

function hasUniqueChars(word) {
  const charSet = new Set();

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;
}

// Test cases
console.log(hasUniqueChars("Monday")); // -> True
console.log(hasUniqueChars("Moonday")); // -> False

function isPangram(sentence) {
  const alphabetSet = new Set();
  const sentenceLower = sentence.toLowerCase();

  for (let i = 0; i < sentenceLower.length; i++) {
    const char = sentenceLower[i];

    if (char >= "a" && char <= "z") {
      alphabetSet.add(char);
    }
  }

  return alphabetSet.size === 26;
}

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
console.log(isPangram("I like cats, but not mice")); // -> False

function findLongestWord(words) {
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}

// Test case
console.log(findLongestWord(["hi", "hello"])); // -> 5
