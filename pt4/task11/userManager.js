let users = [];
let userIdCounter = 0;
function addUser(name, role = "student") {
    const user = { 
        id: ++userIdCounter, 
        name, 
        role 
    };
    users.push(user);
    return user;
}
function getUserById(id) {
    return users.find(u => u.id === id);
}
function getUsersByRole(role) {
    return users.filter(u => u.role === role);
}
function getAllUsers() {
    return users;
}
export { addUser, getUserById, getUsersByRole, getAllUsers };