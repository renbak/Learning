const n = 200;
let sum = 0;
let sumSum = n;
while (sumSum > 0) {
  sum += sumSum;
  sumSum--;
}
console.log('Result:', +sum);
