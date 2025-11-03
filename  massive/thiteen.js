const products = [
  {id: 1, name: "Ноутбук", price: 25000},
  {id: 2, name: "Мышь", price: 800},
  {id: 3, name: "Клавиатура", price: 1200},
  {id: 4, name: "Наушники", price: 1500}
];

const filteredAndSorted = products
  .filter(product => product.price < 1000)  
  .sort((a, b) => a.price - b.price);     

console.log(filteredAndSorted);
