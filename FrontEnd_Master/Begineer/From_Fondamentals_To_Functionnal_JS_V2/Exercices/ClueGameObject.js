

let ClueGame = {

}

const Weapons = ['Candlestick', 'Revolver', 'Knife', 'Lead Pipe', 'Rope', 'Wrench']

const Rooms = ['Kitchen', 'Conservatory', 'Dining Room', 'Ballroom', 'Study', 'Hall', 'Lounge', 'Library', 'Billiard Room']

const Persons = ['Dr Black', 'Miss Scarlet', 'Colonnel Mustard', 'Mrs White', 'Mrs Peacock', 'Professor Plum']

ClueGame.persons = Persons
ClueGame.rooms = Rooms
ClueGame.weapons = Weapons

console.log(ClueGame)

let {weapon, room, person} = {room: 'Kitchen', person:'Colonnel Mustard', weapon:'Wrench'}

console.log({weapon, room, person})