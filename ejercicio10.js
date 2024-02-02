const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {

  let suma =0
  for( let i=0; i<numbers.length; i++){
suma += numbers[i];}
  
  const media= suma/numbers.length;
  return media;
}
console.log(average(numbers));
  
