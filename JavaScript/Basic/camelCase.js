function camelCase(str) {
  str = str.split(' ');
  let b = '';
  let d = '';
  for (let i = 0; i < str.length; i++) {
    b = str[i].substring(0, 1).toUpperCase();
    let c = str[i].substring(1, str[i].length);
    d += b += c;
    //console.log(d);
  }
  return d.slice(0, 1).toLowerCase() + d.slice(1);
}

// examples

console.log(camelCase('some function name')); // ===> someFunctionName
console.log(camelCase('get message')); // ===> getMessage
console.log(camelCase('render tasks list')); // ===> renderTasksList
