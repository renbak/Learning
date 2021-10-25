function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

function swapManual(numbers) {
  const newSwap = [];
  for (let i = 0; i < numbers.length; i += 1) {
    newSwap.push(numbers[i]);
  }
  const a = newSwap.shift();
  newSwap.push(a);
  return newSwap;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
