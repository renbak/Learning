'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const roundNum = [];
  roundNum.push(Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec));
  roundNum.push(Math.trunc(num * Math.pow(10, prec)) / Math.pow(10, prec));
  roundNum.push(Math.ceil(num * Math.pow(10, prec)) / Math.pow(10, prec));
  roundNum.push(Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec));
  roundNum.push(parseFloat(num.toFixed(prec)));
  return roundNum;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
//
