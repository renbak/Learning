import { it } from 'eslint/lib/rule-tester/rule-tester';
import { createCalculator } from './index.js';

it('should add to calculator', () => {
  const result = createCalculator();

  expect(result.add(10)).toEqual(10);
});

it('should take condition first time', () => {
  const result = createCalculator();

  expect(result.getMemo()).toEqual(0);
});

it('should take condition after some operations', () => {
  const result = createCalculator();
  result.add(25);
  result.decrease(20);

  expect(result.getMemo()).toEqual(5);
});

it('should decrease after add ', () => {
  const result = createCalculator();
  result.add(10);
  expect(result.decrease(15)).toEqual(-5);
});

it('should reset any time', () => {
  const result = createCalculator();

  expect(result.reset()).toEqual(0);
});

it('should reset any time, after all operations', () => {
  const result = createCalculator();
  result.add(25);
  result.decrease(20);
  expect(result.reset()).toEqual(0);
});

it('result2 should have independent value from result1', () => {
  const result1 = createCalculator();
  const result2 = createCalculator();

  result1.add(25);
  result1.decrease(20);

  expect(result2.add(17)).toEqual(17);
});
