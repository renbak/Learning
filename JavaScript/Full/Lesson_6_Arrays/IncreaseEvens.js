const increaseEvenEl = (arr, delta) => {
  let elementOdd = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      elementOdd.push(arr[i]);
    }
    if (arr[i] % 2 === 0) {
      elementOdd.push(arr[i] + delta);
    }
  }
  return elementOdd;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
console.log(increaseEvenEl(2, 5, 6, 8, 11, 9, 4), 10);
