/* Coded by Harshit Seksaria */

let firstOperatorPressed = false;
let firstOperand = 0;
let secondOperand = 0;
let currentOperator = '';
let operatorPressedRecently = false;

// When user clicks on any numeric button, this function will be executed
function buttonPressed(number) {
    let currentNumber = document.getElementById('screen-text').innerHTML;

    if (currentNumber == '0' || operatorPressedRecently) {
        var changedNumber = number;
    } else {
        var changedNumber = currentNumber + number;
    }

    document.getElementById('screen-text').innerHTML = changedNumber;
    
    operatorPressedRecently = false;
}

// function when any operator is pressed
function buttonOperatorPressed(operator) {
    operatorPressedRecently = true;

    if (firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML);

        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand;
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand;
                break;

            case '*':
                firstOperand = firstOperand * secondOperand;
                break;

            case '/':
                firstOperand = firstOperand / secondOperand;
        }

        document.getElementById('screen-text').innerHTML = firstOperand;
        document.getElementById('history').innerHTML += ' ' + currentOperator + ' ' + secondOperand;
    } else {
        firstOperand = parseInt(document.getElementById('screen-text').innerHTML);
        document.getElementById('screen-text').innerHTML = '0';
        document.getElementById('history').innerHTML = firstOperand;
    }

    firstOperatorPressed = true;
    currentOperator = operator;
}

// function when = is pressed
function buttonEqualPressed() {

    operatorPressedRecently = true;

    if(firstOperatorPressed) {
        secondOperand = parseInt(document.getElementById('screen-text').innerHTML);
        
        switch(currentOperator) {
            case '+':
                firstOperand = firstOperand + secondOperand;
                break;
            
            case '-':
                firstOperand = firstOperand - secondOperand;
                break;

            case '*':
                firstOperand = firstOperand * secondOperand;
                break;

            case '/':
                firstOperand = firstOperand / secondOperand;
        }

        document.getElementById('screen-text').innerHTML = firstOperand;

        firstOperand = parseInt(document.getElementById('screen-text').innerHTML);
        firstOperatorPressed = false;
        document.getElementById('history').innerHTML = document.getElementById('screen-text').innerHTML;
    }
}

function buttonClearPressed() {
    document.getElementById('screen-text').innerHTML = '0';
    firstOperand = 0;
    secondOperand = 0;
    firstOperatorPressed = false;
    currentOperator = '';
    document.getElementById('history').innerHTML = '';
}