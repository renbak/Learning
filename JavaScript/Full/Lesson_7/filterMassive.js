const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 12, 20]));
