'use strict';

/**
 * @param {array} arr
 * @return {array}
 */
function cloneArr(arr) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    const cloneNew = arr.slice(0);
    a = cloneNew;
    return a;
  }
}

// put your code here

// examples
console.log(cloneArr([11, 4, 8, 3])); // returns ==> [11, 4, 8, 3]
console.log(cloneArr([])); // returns ==> []
console.log(cloneArr([0])); // returns ==> [0]
