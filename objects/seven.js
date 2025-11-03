const car = {
  brand: "Opel",
  model: "Zafira",
  year: 2008,
  engine: {
    power: 150,
    type: "diesel"
  }
};

console.log(car.owner?.name);

if (car.owner?.name) {
  console.log("Владелец:", car.owner.name);
} else {
  console.log("Владелец не указан")
}