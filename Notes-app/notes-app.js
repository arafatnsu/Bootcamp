//DOM -- Document object model

//Query and remove
//const p = document.querySelector('p')
//console.log(p)
//p.remove()

//Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    p.textContent = '******'
        //console.log(p.textContent)
        //p.remove()
})