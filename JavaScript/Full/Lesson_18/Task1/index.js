export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'Ivan', age: 32, email: 'i@gmail.com' },
    { name: 'Bob', age: 12, email: 'b@gmail.com' },
    { name: 'John', age: 25, email: 'j@gmail.com' },
  ],
  getInvitations() {
    return this.quests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
