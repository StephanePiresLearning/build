function insertionSort(array){
    console.log(array)
    length = array.length
    for( let indexToSort = 0 ; indexToSort < length ; indexToSort++){
        for( let indexToCompare = indexToSort + 1 ; indexToCompare < length; indexToCompare++){
            if(array[indexToSort] >  array[indexToCompare]){
                let tmp = array[indexToSort]
                array[indexToSort] = array[indexToCompare]
                array[indexToCompare] = tmp
                console.log(array)
            }
        }
    }
    return array
}


let arrayForTest = [2,1,12,3,8,5,0,76,18,29]

insertionSort(arrayForTest)