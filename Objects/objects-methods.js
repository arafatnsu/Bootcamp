let restaurants = {
    names: 'ABC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },
    seatParty: function(partySize) {
        this.guestCount += partySize
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize
    }
}

restaurants.seatParty(72)
console.log(restaurants.checkAvailability(5))
restaurants.removeParty(4)
console.log(restaurants.checkAvailability(5))