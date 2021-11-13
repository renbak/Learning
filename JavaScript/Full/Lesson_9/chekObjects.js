function compareObjects(obj1, obj2) {
  let keyFirstObject = Object.keys(obj1);
  let valuesFirstObject = Object.values(obj1);
  let resultFirstObject = (keyFirstObject += valuesFirstObject);
  let keySecondObject = Object.keys(obj2);
  let valuesSecondObject = Object.values(obj2);
  let resultSecondObject = (keySecondObject += valuesSecondObject);
  if (resultFirstObject === resultSecondObject) {
    return true;
  } else return false;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
