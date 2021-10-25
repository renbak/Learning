let allSum = 0;
function getSum(firstNum, secondNum) {
  for (let i = firstNum; i <= secondNum; i++) {
    if (i % 2 === 0) {
      allSum += i;
    }
  }
  return allSum;
}

console.log(getSum(4, 6));
