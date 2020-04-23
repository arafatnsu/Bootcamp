function showValue() {
    const value = document.querySelector("#add-todo").value
    const p = document.createElement('p')
    p.textContent = value
    p.style.backgroundColor = value
    document.getElementById('todo').style.color = value
    document.querySelector('#new-add').appendChild(p)
}


const users = [
    { name: "Amit", age: 20 },
    { name: "Arafat", age: 35 },
    { name: "manzu", age: 32 }
]

// show list of users in table with name and age