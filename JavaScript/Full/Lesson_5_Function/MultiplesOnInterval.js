function findDivCount(a, b, n) {
  let s = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) s++;
  }
  return s;
}
console.log(findDivCount(1, 20, 2));
