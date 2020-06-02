const game = {
    suspsects: [
        {
            name: 'Toto',
            color: 'red'
        },
        {
            name: 'Thomas',
            color: 'white'
        }  
    ]
}

function printSuspects(object) {
    for( let i = 0; i < object.suspsects.length; i++){
       let  suspect = object.suspsects[i].name
       console.log(suspect);
    }
   

}

function printObject(object){
    for( key in object){
        object[key].forEach(elem => {
            console.log(elem.name)
            console.log(elem.color)
            elem.suspect = 'I bet'
        })
    }
}

//printSuspects(game)
printObject(game)
console.log(game.suspsects[0].suspect)

let suspsects =[{name: 'Toto',color: 'red'},{ name: 'Thomas',color: 'white'}]

let [SuspectColor1, SuspectColor2] = [suspsects[0].color, suspsects[1].color]

console.log(SuspectColor1)