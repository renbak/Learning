/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
  const ob1 = { ...obj1 };
  const ob2 = { ...obj2 };
  return Object.assign(ob1, ob2);
}

function mergeObjectsV2(obj1, obj2) {
  const ob1 = { ...obj1 };
  const ob2 = { ...obj2 };
  return Object.assign(ob2, ob1);
}

function mergeObjectsV3(obj1, obj2) {
  const ob1 = { ...obj1 };
  const ob2 = { ...obj2 };
  const newObj = { ...ob1, ...ob2 };
  return newObj;
}

function mergeObjectsV4(obj1, obj2) {
  const ob1 = { ...obj1 };
  const ob2 = { ...obj2 };
  const newObj = { ...ob2, ...ob1 };
  return newObj;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};
console.log('1:', obj1);
const obj2 = {
  name: 'Bob',
  age: 23,
  student: false,
};
console.log('2:', obj2);

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
