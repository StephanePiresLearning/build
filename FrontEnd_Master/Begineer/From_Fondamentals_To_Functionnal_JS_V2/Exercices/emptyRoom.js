const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


let roomsNotVisited = newDevelopment[0].rooms
newDevelopment.shift()
console.log(newDevelopment[0])
console.log(roomsNotVisited)

roomsNotVisited = roomsNotVisited.filter(item => {
    console.log(Object.entries(item)[0][1])
    if (!Object.entries(item)[0][1]){
        return true
    }
})

console.log(roomsNotVisited)

let roomNotVisited = roomsNotVisited.filter(item => {
    let room = Object.entries(item)[0][0]
    newDevelopment.forEach(person => {
        person.rooms.forEach(lugar => {
            console.log(lugar)
           if (Object.entries(lugar)[0][0] === room){
               console.log('oto')
               console.log(Object.entries(lugar)[0][1])
                if (Object.entries(lugar)[0][1]){
                    return true
                }
           }
        })
    })
})

console.log(roomNotVisited)


/*let roomWhereNoOneWas
let roomsQuestionMark = []
newDevelopment.forEach(person => {
    let roomsQuestionMarkByPerson = []
    person.rooms.forEach(room =>{
        for(key in room){
            //console.log(room[key])
            if (!room[key]){
                roomsQuestionMarkByPerson.push(room)
            }
        }
    })
    roomsQuestionMark.push(roomsQuestionMarkByPerson)
})

//console.log(roomsQuestionMark)
let roomsQuestionMark2 = roomsQuestionMark.map(object => Object.keys(object))
console.log(roomsQuestionMark2[1])
let firstArray = roomsQuestionMark2.shift()

let toto = firstArray.filter(item => {
    return roomsQuestionMark2.every( rooms => rooms.includes(item))
})

console.log(toto)*/