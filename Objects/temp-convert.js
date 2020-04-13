let convertFarheneit = function(farheniet) {
    return {
        farheniet: farheniet,
        celcius: (farheniet - 32) * (5 / 9),
        kelvin: (farheniet + 459.67) * (5 / 9)
    }
}
let temps = convertFarheneit(74)
console.log(temps)