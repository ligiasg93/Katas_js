const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll() {
  let suma = 0
  
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    suma += number;
   
  }
    
  return suma
}
console.log(sumAll(numbers));
