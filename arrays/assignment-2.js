/* Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return 
the first 'n' elements of the array */

const userDetails = [
    { firstname: "Yasir", lastname: "Arafat", age: 30, address: "Turku" },
    { firstname: "Amit", lastname: "Thakur", age: 29, address: "Yo-kylä" },
    { firstname: "Arun", lastname: "Shop", age: 30, address: "Helsinki" },
    { firstname: "Manju", lastname: "Haque", age: 37, address: "Helsinki" }
]

//const object = userDetails.find(item => item.firstname === "third title");

//console.log(userDetails[userDetails.length - 4])

function getArrayValue(arry, num) {
    if (num == undefined) {
        console.log("first object", arry[0])
    } else {
        console.log("positioned object", arry[num])

    }
}

console.log("first position: ")
getArrayValue(userDetails) // will return first object
console.log("second position: ")
getArrayValue(userDetails, 4)
    // wil/ return second object

//getArrayValue console.log ke bahar kiu hai