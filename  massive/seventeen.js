const products = [
  {id: 1, name: "Телефон", price: 15000},
  {id: 2, name: "Планшет", price: 25000},
  {id: 3, name: "Ноутбук", price: 45000}
];

const mostExpensive = products.reduce((max, product) => {
  return product.price > max.price ? product : max;
});

console.log(mostExpensive);