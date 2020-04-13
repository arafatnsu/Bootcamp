let myAccount = {
    name: 'Yasir Arafat',
    expenses: 0,
    income: 0
}

function addExpenses(account, amount) {
    account.expenses = account.expenses + amount
        //console.log(account)
}


addExpenses(myAccount, 5)
console.log("value of my Account", myAccount)