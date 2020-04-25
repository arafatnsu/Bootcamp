const users = [
    { name: "Amit", city: "Berlin", age: 20 },
    { name: "Manzu", city: "Helsinki", age: 32 },
    { name: "Arafat", city: "Turku", age: 35 },
    { name: "Arun", city: "Turku", age: 31 }
]

function buildTable(data) {
    var table = document.getElementById('my-table')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td class="name-td">${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].city}</td>
                    </tr>`
        table.innerHTML += row
    }
}

buildTable(users)

function toUpCase() {
    let elements = document.getElementsByClassName('name-td')
    for (let i = 0; i < elements.length; i++) {
        //const text = elements[i].innerHTML
        elements[i].innerHTML = elements[i].innerHTML.toUpperCase()
    }
}

function toLowCase() {
    let elements = document.getElementsByClassName('name-td')
    for (let i = 0; i < elements.length; i++) {
        const text = elements[i].innerHTML
        elements[i].innerHTML = text.toLowerCase()
    }
}

function toNormal() {
    let elements = document.getElementsByClassName('name-td')
    for (let i = 0; i < elements.length; i++) {
        const text = elements[i].innerHTML.toLowerCase()
        elements[i].innerHTML = text.charAt(0).toUpperCase() + text.slice(1)
    }
}