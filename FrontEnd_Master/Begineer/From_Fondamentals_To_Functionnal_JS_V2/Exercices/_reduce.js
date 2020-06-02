let _ = {}

_.reduce = function(arr, func, initial = arr[0]){
    let value = initial
    if(Array.isArray(arr)){
        arr.forEach(item => {
            value = func(value, item)
        })
    }
    return value
}


let reduced = _.reduce([1,2,3,4,5,6], function(elem1,elem2){
    return elem1 + elem2
})

console.log(reduced)