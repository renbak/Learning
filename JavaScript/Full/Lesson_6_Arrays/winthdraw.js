function withdraw(clients, balance, client, amount) {
  let userName = [];
  let userAmount = [];
  let emptyMass = [];
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      userName = i;
    }
    for (let e = 0; e < balance.length; e++) {
      if (userName === e) {
        userAmount = balance[e] - amount;
        emptyMass.push(balance[e]);
        if (balance[e] < amount) return -1;
      }
    }
  }
  console.log(emptyMass);
  return userAmount;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // => Output: 37 [1400; 37; -6]
