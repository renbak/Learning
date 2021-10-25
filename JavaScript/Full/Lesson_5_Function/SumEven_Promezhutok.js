function getSum(firstNum, secondNum) {
  let allSum = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    if (i % 2 === 0) {
      allSum += i;
    }
  }
  return allSum;
}

console.log(getSum(3, 9));
