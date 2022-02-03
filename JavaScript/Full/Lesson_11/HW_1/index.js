const splitString = (text, len = 10) => {
  const strArr = [];
  const newArr = [];
  const point = '.';
  if (typeof text !== 'string') {
    return null;
  }
  while (text !== '') {
    strArr.push(text.slice(0, len));
    text = text.slice(len);
  }
  strArr.map((el) => {
    if (el.length === len) {
      newArr.push(el.slice(0, len));
    }
    if (el.length < len) {
      newArr.push(el + point.repeat(len - el.slice(0, len).length));
    }
  });

  return newArr;
};

console.log(splitString('abcd efgh', 7));
console.log(splitString(1, 'abcd efgh', 4));
