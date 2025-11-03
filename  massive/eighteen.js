const cart = [
  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50},
  {id: 3, name: "Блокнот", price: 200}
];

const productIdToCheck = 2;

const isInCart = cart.some(item => item.id === productIdToCheck);
console.log(isInCart);