const account = {
    name: 'Yasir Arafat',
    expense: [],
    income: [],
    addIncome: function(description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function(description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.income.forEach(function(income) {
            totalIncome += expense.amount
        })

        this.expense.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${this.accountBalance}.`
    }
}
account.addIncome('salary', 2000)
account.addExpense('rent', 950)
account.addExpense('coffee', 2)
console.log(account.getAccountSummary())