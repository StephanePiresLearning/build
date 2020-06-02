let _ = {}

_.filter = function(arr, callback){
    let newArr = []
    if(Array.isArray(arr)){
        arr.forEach(item => {
            if (callback(item, arr) === true){
                newArr.push(item)
            }
        })
    }
    return newArr
}

let myArr = ["Stephane", "Alcides", 'Marine', 'Tristan', 'Isabelle']

let myFamilly = _.filter(myArr, (x,myArr) => {
    if( x === 'Isabelle'){
        return false
    } else {
        return true 
    }
})

console.log(myFamilly)

function ES5(a, b) {
    b = b || 2
    return a + b
}

console.log(ES5(2))

_.from = function (object){
    let newArr = []
    for (key in object){
        newArr.push(object[key])
    }
    return newArr
}

let myObj = {
    toto: 'myToto',
    monAge: 25,
    maVilleDorigine: 'Montévrain'
}

let test = _.from(myObj)

console.log(test)

_.frommmm = arr => {
    return Array.prototype.slice.call(arr)
}