function checker(arr) {
  let checkSum = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    checkSum.push(arr[i]); // пушим в переменную checkSum значения массива
    checkSum.sort(compareNumbers);
  }
  if (checkSum[0] + checkSum[arr.length - 1] > 1000) {
    return true;
  } else {
    return false;
  }
}

function compareNumbers(a, b) {
  // связка с методом .sort() для правильной сортировки чисел (1, 2, ..., 22);
  return a - b;
}
// examples
console.log(checker([2, 5, 6, 8, 1100, 9, 4])); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(checker([7, 11, 1])); // ===> [7, 11, 1]
console.log(checker([250, 855])); // ===> []
console.log(checker(2, 5, 6, 8, 11, 9, 4));
