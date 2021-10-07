'use strict';

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* push - добавит элемент в конец массива */

/**
 * С помощью метода push добавь число 111 в конец массива arr
 * Выведи в консоль результат работы метода push, а так же массив arr после выполнения push
 */

const arr = [1, 2, 3, 4, 5];
const res = arr.push(111);
console.log(res);
console.log(arr);
// put your code here

/* pop - удалит из массива последний элемент и вернет его */

/**
 * С помощью метода pop удали последний элемент массива students
 * Выведи в консоль результат работы метода pop, а так же массив students после выполнения pop
 * */

const students = ['Alex', 'Ann', 'Jaz', 'Viktor'];
const delStud = students.pop();
console.log(delStud);
console.log(students);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

/**
 * С помощью метода shift удали первый элемент массива points
 * Выведи в консоль результат работы метода shift, а так же массив points после выполнения shift
 * */

const points = [11, 24, 37, 40, 7];
const pointsShift = points.shift();
console.log(pointsShift);
console.log(points);

// put your code here

/* unshift - добавит элемент в начало массива */

/**
 * С помощью метода unshift добавь число 22 в начало массива ages
 * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
 * */

const ages = [18, 25, 31, 29, 50, 11, 1000000];
const UnAge = ages.unshift(22);
console.log(UnAge);
console.log(ages);

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

/* includes - проверяет есть ли элемент в массиве */

/**
 * С помощью метода includes проверь есть ли числа 0 и 100 в массиве numbers. Результат проверок выведи в консоль
 */
const numbers = [5, 0, 8, 10, -4, 50, 220];
console.log(numbers.includes(0));
console.log(numbers.includes(100));

// put your code here
