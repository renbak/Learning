const getCustomersList = (obj) => {
  let nam = { ...obj };
  let as = obj.reduce((acc, re) => console.log(acc), {});
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};
result = getCustomersList(customers);
console.log(result);
