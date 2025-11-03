let accounts = [];
let accountIdCounter = 0;
function createAccount(userId, balance = 0) {
    const account = { 
        id: ++accountIdCounter, 
        userId, 
        balance 
    };
    accounts.push(account);
    return account;
}
function getAccountById(id) {
    return accounts.find(a => a.id === id);
}
function getAccountsByUserId(userId) {
    return accounts.filter(a => a.userId === userId);
}
function updateAccountBalance(accountId, newBalance) {
    const account = getAccountById(accountId);
    if (account) {
        account.balance = newBalance;
        return true;
    }
    return false;
}
function getAllAccounts() {
    return accounts;
}
export { 
    createAccount, 
    getAccountById, 
    getAccountsByUserId, 
    updateAccountBalance, 
    getAllAccounts 
};