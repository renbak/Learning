function getSum(arr) {
  let sumArray = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr)) {
      sumArray += arr[i];
    }
  }
  return sumArray;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
