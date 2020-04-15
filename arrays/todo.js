const todos = [
    'todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5'
]

console.log(todos)
    //console.log(`You have ${todos.length} todos`)
    //console.log(`todo: ${todos[todos.length - 5]}`)
    //console.log(`todo: ${todos[todos.length - 2]}`)
    //console.log(`todo: ${todos[todos.length - 1]}`)

todos.splice(2, 1)
todos.push('New todo')
todos.shift()

console.log(todos)
console.log(`You have ${todos.length} todos!`)

todos.forEach(function(todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})