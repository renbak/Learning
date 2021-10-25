const getSubArray = (arr, numberOfElements) => {
  let newMas = [];
  for (let e = 0; e < numberOfElements; e++) {
    newMas.push(arr[e]);
  }
  return newMas;
};
console.log(getSubArray([1, 2, 3, 4, 11, 22], 5));
