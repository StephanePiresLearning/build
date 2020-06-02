function bubbleSort(array) {
    let length = array.length
    for(let indexToSort = 0; indexToSort < length; indexToSort++){
        console.log(indexToSort)
        for(let indexToCompare = 0; indexToCompare < length; indexToCompare++){
            if(array[indexToCompare] > array[indexToCompare + 1]){
                let tmp = array[indexToCompare]
                array[indexToCompare] = array[indexToCompare + 1]
                array[indexToCompare + 1] = tmp
                console.log(array)
            }
        }
    }
    return array
}

//let arrayForTest = [2,1,12,3,8,5,0,76,18,29]
let arrayForTest = [7,3,8,2]

console.log(bubbleSort(arrayForTest))