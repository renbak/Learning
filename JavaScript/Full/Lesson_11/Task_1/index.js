const splitText = (text, len = 10) => {
  const strArr = [];
  let startPosition = 0;
  if (typeof text !== 'string') {
    return null;
  }
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

console.log(splitText('abcd efgh', 4));
console.log(splitText(1, 'abcd efgh', 4));
