export function sumOfSquares() {
  return [...arguments].reduce((acc, el) => {
    return acc + Math.pow(el, 2);
  }, 0);
}

console.log(sumOfSquares(1, 3, 2, 10));
