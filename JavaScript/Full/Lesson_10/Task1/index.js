const elements = [
  'NaN',
  1,
  17,
  23.65,
  '222',
  2,
  4,
  2.3,
  '2.2',
  '1name1',
  'name',
  '12.4name',
  NaN,
  undefined,
];
console.log(elements);

const getFiniteNumbers = (arr) => {
  const itFiniteNumbers = [];
  arr.forEach((el) => {
    if (Number.isFinite(el)) {
      itFiniteNumbers.push(el);
    }
  });
  return itFiniteNumbers;
};

console.log(getFiniteNumbers(elements));

//  ################################## //

const getFiniteNumbersV2 = (arr) => {
  const itFiniteNumbersV2 = [];
  arr.forEach((el) => {
    if (isFinite(el)) {
      itFiniteNumbersV2.push(el);
    }
  });
  return itFiniteNumbersV2;
};

console.log(getFiniteNumbersV2(elements));

//  ################################## //

const getNaN = (arr) => {
  const itNaN = [];
  arr.forEach((el) => {
    if (Number.isNaN(el)) {
      itNaN.push(el);
    }
  });
  return itNaN;
};

console.log(getNaN(elements));

//  ################################## //

const getNaNV2 = (arr) => {
  const itNaNV2 = [];
  arr.forEach((el) => {
    if (isNaN(el)) {
      itNaNV2.push(el);
    }
  });
  return itNaNV2;
};

console.log(getNaNV2(elements));

//  ################################## //

const getInteger = (arr) => {
  const itInteger = [];
  arr.forEach((el) => {
    if (Number.isInteger(el)) {
      itInteger.push(el);
    }
  });
  return itInteger;
};

console.log(getInteger(elements));
