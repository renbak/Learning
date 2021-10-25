function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [...new Set(array)]; //Метод new Set создает новую коллекцию. В результате мы получили новый набор (коллекцию) с уникальными числами, а все дубли исчезли.
  return newArr;
}
console.log(removeDuplicates([1, 1, 2, 1, 2, 5, 7, 11, 11]));
console.log(removeDuplicates(1, 1, 2, 1, 2, 5, 7, 11, 11));
