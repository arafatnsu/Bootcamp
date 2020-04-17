const account = {
    name: 'Yasir Arafat',
    expense: [],
    addExpense: function(description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0

        this.expense.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        return `${this.name} has $${totalExpenses} in expense.`
    }
}

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
console.log(account.getAccountSummary())