const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    if (p.textContent.includes('the')) {
        p.remove()
    }
})

//Add a new element
const newP = document.createElement('p')
newP.textContent = 'This is new element'
document.querySelector('body').appendChild(newP)