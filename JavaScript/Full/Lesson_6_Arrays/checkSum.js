function checkSum(arr) {
  let sumArray = 0;
  if (!Array.isArray(arr)) {
    // если не массив
    return null;
    // возвращаем null
  }
  for (let i = 0; i < arr.length; i++) {
    // проходим по массиву
    sumArray += arr[i]; // суммируем каждое число
  }
  return sumArray > 100; // если число больше 100 возвращаем true, иначе false
}

console.log(checkSum([20, 10, 30])); // false
console.log(checkSum(20)); // null
console.log(checkSum([100, 1])); // true
console.log(checkSum([200])); // true
