const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
let sum=0
let mediaSum=0;

for (let i = 0; i < products.length; i++) {
  const product= products[i];
  sum+=product.sellCount
 mediaSum= sum/products.length
}
console.log("la media de las ventas son :" , mediaSum);