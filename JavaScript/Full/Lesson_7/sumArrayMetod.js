const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sumArray = arr.reduce((acc, num) => (acc += num));
  return sumArray;
};

const array = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(array));
