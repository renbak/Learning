'use strict';

/**
 * @param {object} obj
 * @return {object}
 */
function copyObj(obj) {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
}

const product = {
  id: 12345,
  name: 'Laptop SONY',
  isAvailable: true,
  price: 10000,
  color: 'Silver Black',
  storeAddress: null,
};

const copyedObj = copyObj(product);
console.log(copyObj(product));
copyedObj.newPrice = 10000;
console.log(copyedObj);
console.log(copyObj(product));
