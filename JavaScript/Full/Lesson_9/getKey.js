function getKeys(obj) {
  return Object.keys(obj).forEach((key) => console.log(key));
}

const keys = { name: 'John Doe', age: 17, interest: 'football' };
getKeys(keys);
