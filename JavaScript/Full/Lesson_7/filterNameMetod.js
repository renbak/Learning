function filterNames(arr, text) {
  let array = [];
  let array2 = [];
  array = arr.filter((name) => name.toLowerCase().indexOf(text) > -1);
  array.forEach((element) => {
    if (element.length > 5) {
      array2.push(element);
    }
  });
  return array2;
}

console.log(
  filterNames(
    ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya', 'Van'],
    'an'
  )
);
