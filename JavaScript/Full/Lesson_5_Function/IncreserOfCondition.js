function increaser(a, index) {
  if (a > index) {
    a += index;
    return a;
  } else {
    return a;
  }
}
console.log(increaser(26, 23));
