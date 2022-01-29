const price = [1, 4, 65, 0, 12, 98.94, 12.5566];

const getTotalPrice = (arr) => {
  let simbol = '$';
  const sumArray = arr.reduce((acc, num) => (acc += num));
  const finNum = Math.floor(sumArray * 100) / 100;
  return (simbol += finNum);
};

console.log(getTotalPrice(price));
