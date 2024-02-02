const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {
  let palabrasUnicas = [];

  for (let i = 0; i < param.length; i++) {
    if (!palabrasUnicas.includes(param[i])) {
      palabrasUnicas.push(param[i]);
    }
  }

  return palabrasUnicas;
}

const resultado = removeDuplicates(duplicates);
console.log(resultado);
