function reverseArray(arr) {
  let newArray = [];
    if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray.reverse();
}
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(1, 2, 3, 4));
