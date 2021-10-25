function sum(from, to) {
  let all = 0;
  for (let i = from; i <= to; i++) {
    all += i;
  }
  return all;
}

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else {
    return false;
  }
}

console.log(compareSums(1, 16, 1, 15));
