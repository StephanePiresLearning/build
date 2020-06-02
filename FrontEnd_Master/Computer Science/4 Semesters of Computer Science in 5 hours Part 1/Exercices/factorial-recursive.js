
function factorialRecursive(number){
    if(number <= 1){
        return 1
    }
    else {
        return number * factorialRecursive(number - 1)
    }
}


console.log(factorialRecursive(123))