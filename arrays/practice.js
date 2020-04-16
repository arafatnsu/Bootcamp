const notes = [
    { title: "something", description: "some description" },
    { title: "second title", description: "second description", address: "ur address" },
    { title: "third title", description: "third description", address: "third address" }
]


// spread operator
console.log(...notes)

// find index of object where title is "something"
const indexOfTitle = notes.findIndex(item => item.title === "third title")

/*  const indexOfTitle = notes.findIndex(function(item) {
    return item.title === "third title"
});*/

console.log("title index", indexOfTitle)

// find the item where title = "third title"
const object = notes.find(item => item.title === "third title");
/*
 const object = notes.find(function(item) {
     return item.title === "third title"
 })

*/
console.log("object found: ", object)

// find item where address = "ur address"
const object2 = notes.find(item => item.address === "ur address");
console.log("object found: ", object2)

const firstName = "Yasir"
const fullname = `${firstName} Arafat age: 20`
console.log(fullname)

// filer notes where description = "some description"
const filtered = notes.filter(item => item.description === "some description")
console.log("filtered notes", filtered)

// filter notes where description is not equal to "some description"
// filer notes where description = "some description"
const filtered2 = notes.filter(item => item.description !== "some description")
console.log("filtered notes without some description", filtered2)

// sorting
const names = ["arafat", "yasir", "md", "lohagar"]

//sort order
console.log("names in ascending order", names.sort())
console.log("names in descending order", names.reverse())

const sortedArray = names.sort((a, b) => a - b)
console.log("sorting in different way", sortedArray)