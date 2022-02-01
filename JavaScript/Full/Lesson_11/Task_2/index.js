const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-777-77',
  },
  {
    name: 'James',
    phoneNumber: '888-888-88',
  },
  {
    name: 'Cate',
    phoneNumber: '123-456-78',
  },
];

const red = (1, 3);

const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  const result = contacts.sort((a, b) => {
    if (isAsc === true) {
      return a.name.localeCompare(b.name);
    }
    if (isAsc !== true) {
      return b.name.localeCompare(a.name);
    }
  });
  return result;
};

console.log(sortContacts(contacts));
console.log(sortContacts(red));
