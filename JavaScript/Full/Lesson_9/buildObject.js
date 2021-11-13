function buildObject(keysList, valuesList) {
  const res = keysList.reduce((acc, key, index) => {
    acc[key] = valuesList[index];
    return acc;
  }, {});
  // keysList.forEach((key, index) => {
  //   res[key] = valuesList[index];
  // });
  return res;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
// ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
