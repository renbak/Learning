export const user = {
  firstName: '',
  lastName: '',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    let takeFullName = fullName.split(' ');
    this.firstName = takeFullName[0];
    this.lastName = takeFullName[1];
  },
};

user.setFullName('John Doe');
console.log(user.getFullName());
