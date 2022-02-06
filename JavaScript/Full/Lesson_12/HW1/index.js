const reverseString = (text) => {
  if (typeof text !== 'string') {
    return null;
  }
  const reverseText = text.split('').reverse();
  return reverseText.join('');
};

console.log(reverseString('qwerty'));
