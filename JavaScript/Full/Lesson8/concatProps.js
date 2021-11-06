const concatProps = (obj) => {
  const objMus = [];
  for (const key in obj) {
    objMus.push(obj[key]);
  }
  return objMus;
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
console.log(concatProps({}));
