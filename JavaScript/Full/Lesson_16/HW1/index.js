export function createArrayOfFunctions(num) {
  const arr = [];
  const emptyArr = [];
  if (num === undefined) return emptyArr;
  if (!isFinite(num)) return null;

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

console.log(createArrayOfFunctions(9)[5]());
