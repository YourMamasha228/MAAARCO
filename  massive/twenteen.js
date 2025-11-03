let cart = [
  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50}
];

const newProduct = {id: 3, name: "Карандаш", price: 30};

if (!cart.some(item => item.id === newProduct.id)) {
  cart.push(newProduct);
  console.log(`Товар "${newProduct.name}" добавлен в корзину`);
} else {
  console.log(`Товар "${newProduct.name}" уже есть в корзине`);
}

console.log(cart);