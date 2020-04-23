const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Excerise',
    completed: true
}]

const filters = {
    searchText: ''
}

const incompletedTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompletedTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    const p = document.createElement('p')
    p.textContent = document.querySelector("#new-todo-text").value
    document.querySelector('body').appendChild(p)
})


//Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    //console.log(e)
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('click', function(e) {
    filters.searchText = e.target.value
})