const { it } = require('eslint/lib/rule-tester/rule-tester');

it('17 = 17', () => {
  expect(17).toEqual(17);
});

it('18 !== 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);

it('should get only even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([2, 4, 6]);
});
