let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
console.log(sum);
let sumNew = sum;
let div = parseInt((sum /= 1234));
console.log(div);
let mods = sumNew % 1234;
console.log(mods);
console.log(div > mods);
