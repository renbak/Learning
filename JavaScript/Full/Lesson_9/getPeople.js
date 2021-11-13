const getPeople = (obj) => {
  let mapObjToMas = [];
  const newMas = [];
  mapObjToMas = Object.values(obj).forEach((name) => {
    name.forEach((el) => {
      newMas.push(Object.values(el));
    });
  });
  return newMas.flat();
};

const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }, { name: 'Ivan' }, { name: 'Petya' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
console.log(getPeople(rooms));
