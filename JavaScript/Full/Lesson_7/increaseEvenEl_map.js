function increaseEvenEl(arr, delta) {
  let evenNum = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  arr.map(function (num) {
    if (num % 2 === 0) {
      evenNum.push((num += delta));
    }
    if (num % 2 !== 0) {
      evenNum.push(num);
    }
  });

  return evenNum;
}
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
