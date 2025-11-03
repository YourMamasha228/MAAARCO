
function getValueByKey(user, key) {
  return user[key];
}

let user = {id: 1, login: "root", isAdmin: true};

console.log(getValueByKey(user, "id"));      
console.log(getValueByKey(user, "login"));   
console.log(getValueByKey(user, "isAdmin"));