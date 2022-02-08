function withdraw(clients, balance, client, amount) {
  let userName = [];
  let userAmount = [];
  userName = clients.indexOf(client, []);
  userAmount = balance[userName];
  if (userAmount > amount) {
    return userAmount - amount;
  } else return -1;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1150)); // => Output: 37 [1400; 37; -6]
