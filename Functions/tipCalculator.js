let getTip = function(total, tipPercent = .2) {
    return total * tipPercent
}

let tipOne = getTip(100)
let tipTwo = getTip(100, .25)
console.log(tipOne)
console.log(tipTwo)