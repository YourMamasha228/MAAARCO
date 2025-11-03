let cart = [
  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50},
  {id: 3, name: "Блокнот", price: 200}
];

const productIdToRemove = 2;

cart = cart.filter(item => item.id !== productIdToRemove);
console.log(cart);