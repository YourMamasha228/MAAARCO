const users = [
  {id: 1, name: "Иван", email: "ivan@mail.com"},
  {id: 2, name: "Мария", email: "maria@mail.com"},
  {id: 3, name: "Алексей", email: "alex@mail.com"}
];

const searchEmail = "maria@mail.com";

const foundUser = users.find(user => user.email === searchEmail);
console.log(foundUser);