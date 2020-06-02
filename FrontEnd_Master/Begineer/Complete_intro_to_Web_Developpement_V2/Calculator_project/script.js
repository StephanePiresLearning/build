

let computation = {
    string: "0",
    numbers: [],
    operandes: [],
    resultOnScreen: false
}

function addDigitToComputation (digit) {
    if(computation.resultOnScreen === true && computation.operandes.length === 0) {
        let screen = document.getElementsByClassName('screen')
        computation.string = "0"
        screen[0].innerHTML = "0"
        computation.numbers = []
        computation.resultOnScreen = false
    }
    if(computation.string === "0"){
        computation.string = digit
    }
    else{
        computation.string += digit
    }
}

function addOperandeToComputation (operande) {
    if(computation.resultOnScreen === true && computation.operandes.length === 0){
        computation.string = "0"
        computation.operandes.push(operande)
    }
    else{
        computation.numbers.push(parseInt(computation.string))
        computation.string = "0"
        computation.operandes.push(operande)
    }
}


function clear () {
    let clear = document.getElementsByClassName('clear')
    clear = Array.from(clear)
    clear.forEach( (clear) => {
        clear.addEventListener("click", function(event) {
            const screen = document.getElementsByClassName('screen')
            computation.string = "0"
            computation.numbers = []
            computation.operandes = []
            screen[0].innerHTML = "0"
        })
    })
}

function addDigit () {
    let screen = document.getElementsByClassName('screen')
    let digits = document.getElementsByClassName('digit')
    digits = Array.from(digits)
    digits.forEach( (digit) => {
        digit.addEventListener("click", function(event) {
            digitPressed = event.target.innerText
            addDigitToComputation(digitPressed)
            screen[0].innerHTML = computation.string
        })
    })
}

function addOperande() {
    let operandes = document.getElementsByClassName('operande')
    let screen = document.getElementsByClassName('screen')
    operandes = Array.from(operandes)
    operandes.forEach( (operande) => {
        operande.addEventListener("click", function(event) {
            let operandePressed = event.target.innerText
            addOperandeToComputation(operandePressed)
            screen[0].innerHTML = operandePressed
        })
    })
}

function calc() {
    let equal = document.getElementsByClassName('equal')
    equal = Array.from(equal)
    equal.forEach( (equal) => {
        equal.addEventListener("click", function(event) {
            const result = comput()
            const screen = document.getElementsByClassName('screen')
            screen[0].innerHTML = result.toString()
            computation.resultOnScreen = true
            computation.string = `${result}`
            computation.numbers = [result]
            computation.operandes = []
        })
    })
}

function comput(){
    computation.numbers.push(parseInt(computation.string))
    const lenght = computation.numbers.length
    let result = computation.numbers[0]
    for( let i = 0; i < lenght ; i++) {
        switch(computation.operandes[i]){
            case "÷":
                result = (result / computation.numbers[i+1])
                break
            case "×":
                result = (result * computation.numbers[i+1])
                break
            case "−":
                result = (result - computation.numbers[i+1])
                break
            case "+":
                result = (result + computation.numbers[i+1])
                break
            default:
            result = result
            break
        }
    }
    return result
}


function main(){
    addDigit()
    addOperande()
    calc()
    clear()
}

main()