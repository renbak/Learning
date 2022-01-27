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

const getParsedIntegers = (arr) => {
  const itParsedInteger = [];
  arr.forEach((el) => {
    itParsedInteger.push(Number.parseInt(el));
  });
  return itParsedInteger;
};

console.log(getParsedIntegers(elements));

// ##########################################

const getParsedIntegersV2 = (arr) => {
  const itParsedIntegerV2 = [];
  arr.forEach((el) => {
    itParsedIntegerV2.push(parseInt(el));
  });
  return itParsedIntegerV2;
};

console.log(getParsedIntegersV2(elements));

// ##########################################

const getParsedFloats = (arr) => {
  const itParsedFloat = [];
  arr.forEach((el) => {
    itParsedFloat.push(Number.parseFloat(el));
  });
  return itParsedFloat;
};

console.log(getParsedFloats(elements));

// ##########################################

const getParsedFloatsV2 = (arr) => {
  const itParsedFloatV2 = [];
  arr.forEach((el) => {
    itParsedFloatV2.push(parseFloat(el));
  });
  return itParsedFloatV2;
};

console.log(getParsedFloatsV2(elements));
