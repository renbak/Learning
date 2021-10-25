function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
  return array;
}
console.log(sortAsc([2, 1, 3, 20, 4]));
console.log(sortAsc(2, 1, 3, 20, 4));

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
  return array;
}
console.log(sortDesc([2, 1, 3, 20, 4]));
console.log(sortDesc(2, 1, 3, 20, 4));
