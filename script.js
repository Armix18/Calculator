function add(number1, number2){
    return number1 + number2;
}

function substract(number1,number2){
    return number1 - number2;
}

function multiply(number1,number2){
    return number1 * number2;
}

function divide(number1,number2){
    if(number1 == 0 || number2 == 0) return 'Error';
    return number1 / number2;
}

function operate(operator, number1, number2){

    if(operator == '+') return add(number1, number2);
    else if(operator == '-') return substract(number1, number2);
    else if(operator == '*') return multiply(number1, number2);
    else if(operator == '/') return divide(number1, number2);
}

let digits = document.querySelectorAll(".digit");
let buttons = document.querySelectorAll("button");
let visualizer = document.querySelector(".visualizer");
let contOp = 0
let pointCont = 1
let value = ""
visualizer.textContent = 0

buttons.forEach(button => {
    button.addEventListener('click', signs => {
        const point = document.querySelector('.point')
        let resultOperation = 0
        

        if(button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/') {
            pointCont=1
            contOp++

        }
        else if(button.textContent == '.'){
            pointCont--
        }
        
        if(button.textContent == '='){

            resultOperation = makeOperation(value)
            visualizer.textContent = resultOperation
            value = resultOperation
            console.log(resultOperation)
        }

        else if(contOp > 1){
            
            resultOperation = makeOperation(value)
            visualizer.textContent = resultOperation
            value = resultOperation
            console.log(resultOperation)
            contOp = 1
        }

        (pointCont == 0) ? point.disabled = true : point.disabled = false

        value += button.textContent 

        if(button.textContent == '='){
            value = resultOperation
            contOp = 0
        }        

        else if(button.textContent == 'CE'){
            value = ''
            contOp = 0
            pointCont=1
        }

        else if(button.textContent == '<-' && value != 0){
            value = value.slice(0,-3)
        }

        else if(value.at(0) == '+' || value.at(0) == '*' || value.at(0) == '/'|| value.at(0) == '.') value = '0' + value

        visualizer.textContent = value

        if(value == '') visualizer.textContent = 0

        visualizer.textContent = visualizer.textContent.substring(0,13)
        console.log('value0 '+value.at(0))
        console.log('value '+value)
    });
});

function makeOperation(value){
    //let completeOperation = value.slice(0,-1);
    let completeOperation = value
    let values = completeOperation.split(/[^A-Za-z0-9_.]/);
    if (!values[0]) values[0] = 0
    console.log('values ' + values)
    let operator = completeOperation.match(/[^A-Za-z0-9_.]/g);
    console.log(operator)

    let contOperator = 0
    let currentOperator = 0
    let result = values.reduce((accum, curr) => {
        accum = parseFloat(accum);
        curr = parseFloat(curr);
        operate(operator[contOperator],accum,curr);
        currentOperator = operate(operator[contOperator],accum,curr);
        accum = currentOperator;
        contOperator++;
        return currentOperator;
    });
    if (Number.isInteger(result)){
        return result
    } else if(typeof result === 'string') {
        return result
    } else {
        return Math.round(result*100)/100
    }
}