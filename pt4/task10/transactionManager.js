let transactions = [];
let transactionIdCounter = 0;
function transfer(fromAccId, toAccId, amount) {
    const accountManager = require('./accountManager');
    const from = accountManager.getAccountById(fromAccId);
    const to = accountManager.getAccountById(toAccId);
    if (!from || !to) {
        console.log("Ошибка: один из счетов не найден");
        return false;
    }
    if (from.balance < amount) {
        console.log("Ошибка: недостаточно средств на счете");
        return false;
    }
    if (amount <= 0) {
        console.log("Ошибка: сумма перевода должна быть положительной");
        return false;
    }
    accountManager.updateAccountBalance(fromAccId, from.balance - amount);
    accountManager.updateAccountBalance(toAccId, to.balance + amount);
    const transaction = { 
        id: ++transactionIdCounter, 
        fromAccId, 
        toAccId, 
        amount,
        date: new Date()
    };
    transactions.push(transaction);
    console.log(`Перевод ${amount}₽ от ${fromAccId} к ${toAccId}`);
    return true;
}
function deposit(accountId, amount) {
    const accountManager = require('./accountManager');
    const account = accountManager.getAccountById(accountId);
    if (!account) {
        console.log("Ошибка: счет не найден");
        return false;
    }
    if (amount <= 0) {
        console.log("Ошибка: сумма должна быть положительной");
        return false;
    }
    accountManager.updateAccountBalance(accountId, account.balance + amount);
    const transaction = {
        id: ++transactionIdCounter,
        toAccId: accountId,
        amount,
        type: 'deposit',
        date: new Date()
    };
    transactions.push(transaction);
    console.log(`Пополнение счета ${accountId} на ${amount}₽`);
    return true;
}
function withdraw(accountId, amount) {
    const accountManager = require('./accountManager');
    const account = accountManager.getAccountById(accountId);
    if (!account) {
        console.log("Ошибка: счет не найден");
        return false;
    }
    if (account.balance < amount) {
        console.log("Ошибка: недостаточно средств");
        return false;
    }
    accountManager.updateAccountBalance(accountId, account.balance - amount);
    const transaction = {
        id: ++transactionIdCounter,
        fromAccId: accountId,
        amount,
        type: 'withdrawal',
        date: new Date()
    };
    transactions.push(transaction);
    console.log(`Снятие со счета ${accountId} на ${amount}₽`);
    return true;
}
function getTransactionHistory(accountId) {
    return transactions.filter(t => 
        t.fromAccId === accountId || t.toAccId === accountId
    );
}
function getAllTransactions() {
    return transactions;
}
export { 
    transfer, 
    deposit, 
    withdraw, 
    getTransactionHistory, 
    getAllTransactions 
};