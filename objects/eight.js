let user = {id: 1, login: "root", isAdmin: true};

for (let key in user) {
  console.log(`Ключ: ${key}, Значение: ${user[key]}`);
}