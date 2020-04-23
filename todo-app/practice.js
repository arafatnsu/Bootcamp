const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"]

//const index = fruits.findIndex(fruit => fruit === "blueberries");

const index = fruits.findIndex(function(fruit) {
    return fruit === "blueberries"
})

console.log(index); // 3
console.log(fruits[index]); // blueberries