function quickSort(array){
    if (array.length < 2){
        return array
    }
    let pivot = array.pop()
    let lowerArray = []
    let biggerArray = []
    while(array.length){
        if(array[0] > pivot){
            biggerArray.push(array.shift())
        } else {
            lowerArray.push(array.shift())
        }
    }
    return recombine(quickSort(lowerArray), quickSort(biggerArray), pivot)
}

function recombine(lowerArray, biggerArray, pivot){
    return [...lowerArray, pivot, ...biggerArray]
}


let testArray = [0,12,3,4,235,3,2,981,5]

console.log(quickSort(testArray))