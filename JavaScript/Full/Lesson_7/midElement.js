function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let arrLen = arr.length;
  let num = arr.reduce((acc, num) => (acc += num));
  return (num /= arrLen);
}
console.log(arrAverage([2, 5, 6, 10, 3, 11]));
