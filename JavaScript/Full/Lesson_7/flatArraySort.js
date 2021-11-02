const flatArray = (arr) =>
  arr.reduce((acc, elem) => acc.concat(elem), []).sort((a, b) => a - b);
// reduce проходим по каждому еллементу (аналог for), concat соединяем в плоский массив [1, 2, 3,], sort сортируем массив в нужном нам порядке
//  [1, 2, 3, 4].reduce(function(acc, num)){
//     return acc + num
// }
// 1: 0, 1 => 1
// 2: 1, 2 => 3
// 3: 3, 3 => 6
// 4: 6, 4 => 10
//
const array = [1, [5, 4, 3], 2, [6], 7];
console.log(flatArray(array));
