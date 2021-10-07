function countCommision(amount, currency) {
  if (currency == 'USD' && amount <= 5000) {
    return (amount *= 0.005);
  }
  if (currency == 'USD' && amount > 5000) {
    return (amount *= 0.0025);
  }
  if (currency == 'UAH' && amount <= 1000) {
    return (amount *= 0.02);
  }
  if (currency == 'UAH' && amount > 1000) {
    return amount * 0.01;
  }
  if (currency == 'EUR' && amount <= 3000) {
    return (amount *= 0.0075);
  }
  if (currency == 'EUR' && amount > 3000) {
    return (amount = 0);
  }
}
// examples
console.log(countCommision(20000, 'USD')); // ===> 50
console.log(countCommision(500, 'UAH')); // ===> 10
console.log(countCommision(2000, 'UAH')); // ===> 20
console.log(countCommision(5000, 'EUR'));
console.log(countCommision(10000, 'UAH'));
console.log(countCommision(500, 'EUR'));
