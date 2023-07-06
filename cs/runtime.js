const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(sumZero);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(sumZero);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);





function testArr(arr, num){
    let sum = [];
    let diff 
    for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i]
        if (sum[diff]){
            return true
        } else {
            sum[arr[i]] = true
        }
    }
    return false
}

let addZero = testArr [1, 2, 3, -2];

let addZero2 = testArr [1, 2, 3, -2];




function uniChar(str) {
    const characterCount = {}; 
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        characterCount[char] = characterCount[char] + 1 || 1; 
    }
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if (characterCount[char] === 1){
            return i;
        }
    }

return -1;
}

let testStr = 'Monday'
console.log(uniChar(testStr)) 
let testStr2 = 'Moonday'
console.log(uniChar(testStr2)) 


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  isPangram(10) 

console.log(isParams("The quick brown fox jumps over the lazy dog!", "I like cats, but not mice"))

console.log(isParams("I like cats, but not")); 


const str = ['a', 'people', 'hello'];

const longestword = (str) => {
const strArray = str.split(" ");
const sortedStrArray = strArray.sort(
    (strA, strB) => {
        return strB.length - strA.length;
}
);
return sortedStrArray[0]; 
}

console.log(longestword(str));



