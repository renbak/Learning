const countOccurrences = (text, str) => {
  let position = text.indexOf(str);
  let start = 0;
  console.log(position);
  if (str === '') {
    return null;
  }
  while (position !== -1) {
    start += 1;
    position = text.indexOf(str, position + 1);
    console.log(position);
  }
  return start;
};

console.log(
  countOccurrences(
    'People rejoice at the Sun, and I"m dreaming of the Moon.',
    't'
  )
);
