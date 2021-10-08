const m = 1;
const n = 30;
let mIsNew = m;
let result = 1;
do {
  if (mIsNew % 2 === 1) {
    result *= mIsNew;
  }
  mIsNew++;
} while (mIsNew <= n);

console.log(result);
