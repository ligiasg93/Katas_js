const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param) {
  for (let i = 0; i < nameFinder.length; i++) {
    if (nameFinder[i].toLowerCase() === param.toLowerCase()) {
      return { encontrado: true, posicion: i };
    }
  }
  return { encontrado: false, posicion: -1 };
}


console.log(finderName('Jessica'));
