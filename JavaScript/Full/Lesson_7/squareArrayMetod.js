const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((num) => (num *= num));
};
const array = [1, 2, 3, 4, 5];
console.log(squareArray(array));
console.log(squareArray(1, 2, 3, 4, 5));
