'use strict';

// put   your code he
const product = {
  id: 12345,
  name: 'Laptop SONY',
  isAvailable: true,
  price: 10000,
  color: 'Silver Black',
  storeAddress: null,
};

function getKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}

function getValues(obj) {
  const keyValues = Object.values(obj);
  return keyValues;
}

console.log(getKeys(product));
console.log(getValues(product));
