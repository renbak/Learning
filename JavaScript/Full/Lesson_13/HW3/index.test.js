import { it } from 'eslint/lib/rule-tester/rule-tester';
import { reverseArray, withdraw, getAdults } from './index';

it('should reverse all data from array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should reverse all data from array', () => {
  const result = reverseArray(['a', 'b', 'c', 'd']);

  expect(result).toEqual(['d', 'c', 'b', 'a']);
});

it('should check array or no and say null if not array', () => {
  const result = reverseArray(1, 2, 3, 4, 5);

  expect(result).toEqual(null);
});

it('should check if not enough mony', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50);

  expect(result).toEqual(-1);
});

it('should check if enough mony, subtract from account and return new balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should check if enough mony, subtract from account and return new balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1150);

  expect(result).toEqual(250);
});

it('should find people who more than 18 yers', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should find people who more than 18 yers', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should return empty object if data is empty', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});
