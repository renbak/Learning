function getAdults(obj) {
  const usersMassive = Object.entries(obj);
  const usersAdult = usersMassive.filter((name) => name[1] >= 18);
  return usersAdult.map((name) => name[0]);
}
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
