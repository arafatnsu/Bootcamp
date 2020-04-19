const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain.'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eationg a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new chair'
}]

const searchObject = {
    searchText: ''
}

const renderNotes = function(notesArray, searchObject) {
    const result = notesArray.filter(function(note) {
        return note.title.includes(searchObject.searchText)
    })

    document.querySelector('#notes').innerHTML = ''

    result.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, searchObject)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

/**
 * filter
 * find
 * findIndex
 * reduce
 * map
 * querySelector
 * querySelectorAll
 * getElementById
 * getElementsByClassNames
 * Object.keys
 * innerHTML
 * addEventListener
 * removeEventListener
 * onclick
 * remove
 * add
 * replace
 * join
 * indexOf
 * search
 * slice
 * splice
 * substring
 * charCodeAt
 * toString
 * toFixed
 * parseInt
 * ParseFloat
 * Number
 * length
 * pop
 * shift
 * unshift
 * concat
 */


/**
 * Events
 * click
 * change
 * input
 * hover
 * mouseover
 * mouseout
 */

/** 
if ( a == b) {
    return c 
} else {
    return d
}

a == b ? c : d

*/