const users = [
  {id: 1, name: "Иван", age: 25},
  {id: 2, name: "Мария", age: 30},
  {id: 3, name: "Алексей", age: 28}
];

const userNames = users.map(user => user.name);
console.log(userNames);