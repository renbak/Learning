const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copyArr = [...arr];

  return copyArr;
};

const array = [1, 2, 3, 4, 5, 6];
console.log(cloneArr(array));
console.log(cloneArr(1, 2, 3, 4));
console.log(array);

