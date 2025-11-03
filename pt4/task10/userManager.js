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
function getUserById(id) {
    return users.find(u => u.id === id);
}

function getAllUsers() {
    return users;
}
export { addUser, getUserById, getAllUsers };
