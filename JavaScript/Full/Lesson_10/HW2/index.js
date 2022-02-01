const getRandomNumbers = (length, from, to) => {
  const pushNum = new Array(length);
  let randomNum = [];
  randomNum = Math.random() * (to - from) + from;
  if (randomNum >= Math.ceil(from)) {
    pushNum.fill(Math.round(randomNum), 0, length);
  } else {
    return null;
  }
  return pushNum;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
