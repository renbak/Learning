import { it } from 'eslint/lib/rule-tester/rule-tester';
import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should test, it not empty array', () => {
  const resultEmptyArray = getMinSquaredNumber([]);

  expect(resultEmptyArray).toEqual(null);
});

it('should test, array is array ', () => {
  const resultNotArray = getMinSquaredNumber(1);

  expect(resultNotArray).toEqual(null);
});

it('should take min number and return square number', () => {
  const resultMinSquare = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(resultMinSquare).toEqual(4);
});
