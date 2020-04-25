const users = [
    { name: "Amit", city: "Berlin", age: 20 },
    { name: "Arafat", city: "Turku", age: 35 },
    { name: "Arun", city: "Turku", age: 31 },
    { name: "Manzu", city: "Helsinki", age: 32 }
]

function buildTable(data) {
    var table = document.getElementById('my-table')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].city}</td>
                    </tr>`
        table.innerHTML += row
    }
}

buildTable(users)