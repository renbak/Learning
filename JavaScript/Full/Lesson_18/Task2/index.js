export const wallet = {
  transactions: [1, 3, 12, 5, 199, 31],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
