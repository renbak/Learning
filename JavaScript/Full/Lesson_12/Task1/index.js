const calc = (expression) => {
  const [a, operaror, b] = expression.split(' ');
  let result;
  switch (operaror) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
      break;
    case '/':
      result = Number(a) / Number(b);
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc('31 / 5'));
