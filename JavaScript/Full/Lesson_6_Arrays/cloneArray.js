function cloneArr(arr) {
  let copyArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    copyArray.push(arr[i]); // копируем (ложим) в новую переменную
  }
  return copyArray;
}
console.log(cloneArr([1, 2, 3, 4]));
console.log(cloneArr(1, 2, 3, 4));
