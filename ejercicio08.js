


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let palabraMasLarga="";
for (let i = 0; i < avengers.length; i++) {

  if(param[i].length>palabraMasLarga.length){
    palabraMasLarga=param[i]
  }
}
return palabraMasLarga 
}// insert code
const palabraMasLarga = findLongestWord(avengers);
console.log(palabraMasLarga);
