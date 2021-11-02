const reverseArray = (arr) => {
  let newArr = [...arr];
  if (!Array.isArray(arr)) {
    return null;
  }
  return newArr.reverse();
};
console.log(reverseArray([1, 2, 3, 4, 5]));
