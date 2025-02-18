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
    return number1 / number2;
}

console.log(add('3','5'))

let firstNumber 
let operator
let secondNumber

function operate(operator, number1, number2){

    if(operator == '+') return add(number1, number2);
    else if(operator == '-') return substract(number1, number2);
    else if(operator == '*') return multiply(number1, number2);
    else if(operator == '/') return divide(number1, number2);
    
}

let a = '108/12'
//quitarle el igual antes
hola = a.match(/\W/g)
//console.log(hola.length != 1)
//if(hola.length >)
//console.log(hola)

let operators
operators = a.split(/\W/);
let o
o = a.match(/\W/g);
f= 0
let e = 0
let d = operators.reduce((accum, curr) => {
    accum = parseFloat(accum)
    curr = parseFloat(curr)
    //accum  108, curr 12
    operate(o[f],accum,curr)
    e = operate(o[f],accum,curr)
    //console.log('accum ' + accum)
    accum = e
    f++
    return e
    //console.log(operate(o,accum,curr));
    //console.log(o)
    
    
    /*
    console.log('curr '+curr)
    e++
 console.log(operate(o[0],accum,curr))   */
});
/*
console.log(operators)
console.log(o)*/
console.log(d)
