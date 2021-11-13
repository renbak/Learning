function uniqueCount(array) {
  let a = 0;
  if (!Array.isArray(array)) {
    return null;
  }
  const newArr = [...new Set(array)]; // убираем дубликаты и приводим к массиву методом (...)
  for (let i = 0; i < newArr.length; i++) {
    //..проходимся по новому массиву и плюсуем на каждой итерации к переменной а по единице
    a++;
  }
  return a;
}
console.log(uniqueCount([1, 1, 2, 1, 2, 5, 7, 11, 11, 11, 3]));
console.log(uniqueCount(1, 1, 2, 1, 2, 5, 7, 11, 11));
