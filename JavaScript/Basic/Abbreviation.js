// /**
//  * @param {string} str
//  * @return {string}
//  */

function getAbbreviation(str) {
  str = str.split(' ');
  let b = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 2) {
      b += str[i].substring(0, 1);
    }
  }
  return b.toUpperCase();
}

// examples
console.log(getAbbreviation('some company name')); // ===> SCN
console.log(getAbbreviation('Union of Soviet Socialist Republics')); // ===> USSR
console.log(getAbbreviation('United States of America')); // ===> US
