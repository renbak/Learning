export const createCalculator = () => {
  let memoNum = 0;
  function add(num) {
    return (memoNum += num);
  }

  function decrease(num) {
    return (memoNum -= num);
  }

  function reset() {
    return (memoNum = 0);
  }

  function getMemo() {
    return memoNum;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
