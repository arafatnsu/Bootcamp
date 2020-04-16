// 1. create array of 10 odd number and change it to even number and then console.log each item

// 2. create array of first 5 even numbers and calcualte average and sum of those numbers and console.log the value

// 3. create array of 4 objects with properties: firstname, lastname,
// age, address and loop over and show value of each object in following format
// Details of persons:
// Full name:
// Twice age: age * 2
// address:
// Total number of objects:
// sort persons by name in ascending order

const oddNumbers = [1, 3, 5, 7, 11, 17, 23, 19, 29, 35]

const evenNumbers = oddNumbers.map(item => item + 1)
console.log("even for odd manipulation", evenNumbers)

// 2. create array of first 5 even numbers and calcualte average and sum of those numbers and console.log the value
const firstFiveEvenNumbers = [2, 4, 6, 8, 10]
const arrSum = firstFiveEvenNumbers.reduce((a, b) => a + b, 0)
console.log("Sum of the even numbers: ", arrSum)
console.log("average of even numbers", arrSum / firstFiveEvenNumbers.length)
    //3
const userDetails = [
    { firstname: "Yasir", lastname: "Arafat", age: 30, address: "Turku" },
    { firstname: "Amit", lastname: "Thakur", age: 29, address: "Yo-kylä" },
    { firstname: "Arun", lastname: "Shop", age: 30, address: "Helsinki" },
    { firstname: "Manju", lastname: "Haque", age: 37, address: "Helsinki" }
]

console.log("Details of the persons: \n")
userDetails.forEach(function(item) {
    console.log("Full Name: ", `${item.firstname} ${item.lastname}`)
    console.log("Twice age: ", item.age * 2)
    console.log("address: ", item.address)
})

console.log("Total no. of persons: ", userDetails.length)