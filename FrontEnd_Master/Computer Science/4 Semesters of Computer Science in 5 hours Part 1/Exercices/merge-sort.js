function mergeSort(array){
    if (array.length <= 1){
        return array
    }
    const length = array.length
    const middle = Math.floor(length/2)
    let leftArray = array.slice(0,middle)
    let rightArray = array.slice(middle)
    return recombine(mergeSort(leftArray),mergeSort(rightArray))
}


function recombine (leftArray, rightArray){
    let recombined = []
    while (leftArray.length && rightArray.length){
        if(leftArray[0] > rightArray[0]){ 
            recombined.push(rightArray.shift())
        } else {
            recombined.push(leftArray.shift())
        }
    }

    return [...recombined, ...leftArray, ...rightArray]

}

let testArray = [0,12,3,4,1,4,23,98,7,4,23,1,2,32,1,5,3,2,1,981,5]

console.log(mergeSort(testArray))