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

//counting...... 1..2..3..4....
for (let count = 1; count <= 5; count++) {
    console.log(count)
}

for (let count = 5; count >= 0; count--) {
    console.log(count)
}

for (let count = 0; count < todos.length; count++) {
    console.log(todos[count])
}

for (let count = todos.length - 1; count >= 0; count--) {
    console.log(todos[count])
}