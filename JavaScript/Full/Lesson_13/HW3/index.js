export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = [...arr];

  return newArr.reverse();
};

export function withdraw(clients, balance, client, amount) {
  let userName = [];
  let userAmount = [];
  userName = clients.indexOf(client, []);
  userAmount = balance[userName];
  if (userAmount > amount) {
    return userAmount - amount;
  } else return -1;
}

export const getAdults = (obj) => {
  const adultPeople = {};
  for (const name in obj) {
    if (obj[name] >= 18) adultPeople[name] = obj[name];
  }
  return adultPeople;
};
