function squareArray(arr) {
  const numArray = [];
  let copyArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    copyArr.push(arr[i]); // клонируем массив
    copyArr[i] *= copyArr[i]; // умножаем клонированный массив
    numArray.push(copyArr[i]); // помещаем клонированный массив в переменную
  }

  return numArray;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
console.log(squareArray(1)); // ==> Null
