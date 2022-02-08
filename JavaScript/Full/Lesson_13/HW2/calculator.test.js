import { it } from 'eslint/lib/rule-tester/rule-tester';
import { calc } from './calculator.js';

it('should add numbers', () => {
  const result = calc('40 + 51');

  expect(result).toEqual('40 + 51 = 91');
});

it('should subtract numbers', () => {
  const result = calc('154 - 150');

  expect(result).toEqual('154 - 150 = 4');
});

it('should multiply numbers', () => {
  const result = calc('11 * 20');

  expect(result).toEqual('11 * 20 = 220');
});

it('should add numbers', () => {
  const result = calc('900 / 30');

  expect(result).toEqual('900 / 30 = 30');
});

it('should expect that data is string', () => {
  const result = calc(40, 51);

  expect(result).toEqual(null);
});
