let users = [
  {id: 1, name: "Anna"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Olga"}
];

const ivan = users.find(user => user.name === "Ivan");
console.log(ivan);