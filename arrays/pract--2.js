const userDetails = [
    { firstname: "Yasir", lastname: "Arafat", age: 30, address: "Turku" },
    { firstname: "Amit", lastname: "Thakur", age: 29, address: "Yo-kylä" },
    { firstname: "Arun", lastname: "Shop", age: 30, address: "Helsinki" },
    { firstname: "Manju", lastname: "Haque", age: 37, address: "Helsinki" }
]

function arguments(user, n) {
    if (n === undefined) {
        console.log("First Property::", user[0])
    } else {
        console.log("Any Assigned Position::", user[n])
    }
}

arguments(userDetails)
arguments(userDetails, 1)
arguments(userDetails, 2)
arguments(userDetails, 100)