let _ = {}

let myList = ['toto', 'titi', 'tata', 'tutu']

_.map = function (arr, callback) {
    let newArr = []
    if(Array.isArray(arr)){
        arr.forEach(item => {
           newArr.push(callback(item, arr))
        })
    }
    return newArr
} 

let fullName = _.map(myList, function(value, list){
    return 'This is my ' + value
})

console.log(fullName)