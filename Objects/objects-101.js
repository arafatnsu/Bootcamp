let userDetails = {
    name: 'Yasir',
    age: 29,
    location: 'Turku'
}

console.log(`${userDetails.name} is ${userDetails.age} and lives in ${userDetails.location}.`)

userDetails.age = userDetails.age + 1

console.log(`${userDetails.name} is ${userDetails.age} and lives in ${userDetails.location}.`)