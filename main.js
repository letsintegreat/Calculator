/* Coded by Harshit Seksaria */

let firstOperatorPressed = false
let firstOperand = 0
let secondOperand = 0
let currentOperator = ''
let operatorPressedRecently = false

// When 1 Button is pressed this function will be executed
function buttonOnePressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML

    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '1'
    } else {
        changedNumber = currentNumber + '1'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 2 Button is pressed this function will be executed
function buttonTwoPressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML
    
    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '2'
    } else {
        changedNumber = currentNumber + '2'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 3 Button is pressed this function will be executed
function buttonThreePressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML
    
    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '3'
    } else {
        changedNumber = currentNumber + '3'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 4 Button is pressed this function will be executed
function buttonFourPressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML
    
    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '4'
    } else {
        changedNumber = currentNumber + '4'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 5 Button is pressed this function will be executed
function buttonFivePressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML

    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '5'
    } else {
        changedNumber = currentNumber + '5'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 6 Button is pressed this function will be executed
function buttonSixPressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML

    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '6'
    } else {
        changedNumber = currentNumber + '6'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 7 Button is pressed this function will be executed
function buttonSevenPressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML

    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '7'
    } else {
        changedNumber = currentNumber + '7'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 8 Button is pressed this function will be executed
function buttonEightPressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML

    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '8'
    } else {
        changedNumber = currentNumber + '8'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// When 9 Button is pressed this function will be executed
function buttonNinePressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML

    let changedNumber

    if (currentNumber == '0' || operatorPressedRecently) {
        changedNumber = '9'
    } else {
        changedNumber = currentNumber + '9'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}

// function when + is pressed
function buttonPlusPressed() {

    operatorPressedRecently = true

    if (firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML)
        
        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand
                break;

            case '*':
                firstOperand = firstOperand * secondOperand
                break;

            case '/':
                firstOperand = firstOperand / secondOperand
        }

        document.getElementById('screen-text').innerHTML = firstOperand
        document.getElementById('history').innerHTML += ' ' + currentOperator + ' ' + secondOperand
    } else {
        firstOperand = parseInt(document.getElementById('screen-text').innerHTML)
        document.getElementById('screen-text').innerHTML = '0'
        document.getElementById('history').innerHTML = firstOperand
    }

    firstOperatorPressed = true
    currentOperator = '+'
}

// function when - is pressed
function buttonMinusPressed() {

    operatorPressedRecently = true

    if (firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML)
                
        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand
                break;

            case '*':
                firstOperand = firstOperand * secondOperand
                break;

            case '/':
                firstOperand = firstOperand / secondOperand
        }

        document.getElementById('screen-text').innerHTML = firstOperand
        document.getElementById('history').innerHTML += ' ' + currentOperator + ' ' + secondOperand
    } else {
        firstOperand = parseInt(document.getElementById('screen-text').innerHTML)
        document.getElementById('screen-text').innerHTML = '0'
        document.getElementById('history').innerHTML = firstOperand
    }

    firstOperatorPressed = true
    currentOperator = '-'
}

// function when * is pressed
function buttonMultiplyPressed() {

    operatorPressedRecently = true

    if (firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML)
                
        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand
                break;

            case '*':
                firstOperand = firstOperand * secondOperand
                break;

            case '/':
                firstOperand = firstOperand / secondOperand
        }

        document.getElementById('screen-text').innerHTML = firstOperand
        document.getElementById('history').innerHTML += ' ' + currentOperator + ' ' + secondOperand
    } else {
        firstOperand = parseInt(document.getElementById('screen-text').innerHTML)
        document.getElementById('screen-text').innerHTML = '0'
        document.getElementById('history').innerHTML = firstOperand
    }

    firstOperatorPressed = true
    currentOperator = '*'
}

// function when / is pressed
function buttonDividePressed() {

    operatorPressedRecently = true

    if (firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML)
                
        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand
                break;

            case '*':
                firstOperand = firstOperand * secondOperand
                break;

            case '/':
                firstOperand = firstOperand / secondOperand
        }

        document.getElementById('screen-text').innerHTML = firstOperand
        document.getElementById('history').innerHTML += ' ' + currentOperator + ' ' + secondOperand
    } else {
        firstOperand = parseInt(document.getElementById('screen-text').innerHTML)
        document.getElementById('screen-text').innerHTML = '0'
        document.getElementById('history').innerHTML = firstOperand
    }

    firstOperatorPressed = true
    currentOperator = '/'
}

// function when = is pressed
function buttonEqualPressed() {

    operatorPressedRecently = true

    if(firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML)
        
        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand
                break;

            case '*':
                firstOperand = firstOperand * secondOperand
                break;

            case '/':
                firstOperand = firstOperand / secondOperand
        }

        document.getElementById('screen-text').innerHTML = firstOperand

        firstOperand = parseInt(document.getElementById('screen-text').innerHTML)
        firstOperatorPressed = false
        document.getElementById('history').innerHTML = document.getElementById('screen-text').innerHTML
    }
}

function buttonClearPressed() {
    document.getElementById('screen-text').innerHTML = '0'
    firstOperand = 0
    secondOperand = 0
    firstOperatorPressed = false
    currentOperator = ''
    document.getElementById('history').innerHTML = ''
}

function buttonZeroPressed() {
    let currentNumber = document.getElementById('screen-text').innerHTML
    let changedNumber

    if (currentNumber == '0') {
        changedNumber = '0'
    } else {
        changedNumber = currentNumber + '0'
    }

    document.getElementById('screen-text').innerHTML = changedNumber
    operatorPressedRecently = false
}