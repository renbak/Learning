import { it } from 'eslint/lib/rule-tester/rule-tester';
import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squra from array', () => {
  const result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers from array', () => {
  const result = getOddNumbers([1, 2, 3]);

  expect(result).toEqual([1, 3]);
});

it('should get summ two numbers', () => {
  const result = getSum(5, 2);

  expect(result).toEqual(7);
});
