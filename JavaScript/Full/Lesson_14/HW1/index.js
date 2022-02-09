let memoNum = 0;

export function add(num) {
  return (memoNum += num);
}

export function decrease(num) {
  return (memoNum -= num);
}

export function reset() {
  return (memoNum = 0);
}

export function getMemo() {
  return memoNum;
}
