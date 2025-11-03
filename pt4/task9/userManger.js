let users = [];
let userIdCounter = 0;
function addUser(name) {
    const user = { 
        id: ++userIdCounter, 
        name 
    };
    users.push(user);
    return user;
}
function listUsers() {
    console.log("Пользователи:");
    users.forEach(u => console.log(`${u.id}. ${u.name}`));
}
function getUserById(id) {
    return users.find(u => u.id === id);
}
export { addUser, listUsers, getUserById };
