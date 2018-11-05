/* Coded by Harshit Seksaria */

var query = '';
const screen = document.getElementById('screen-text');
const history = document.getElementById('history');

// When user clicks on any numeric button, this function will be executed
function buttonPressed(number) {
    let currentNumber = screen.innerHTML;
    screen.innerHTML = currentNumber == '0'
        ? number
        : currentNumber + number;
}

// function when any operator is pressed
function buttonOperatorPressed(operator) {
    query += screen.innerHTML
          + operator;

    history.innerHTML += screen.innerHTML + ' '
                      + operator + ' ';

    screen.innerHTML = '0';
}

// function when '=' is pressed
function buttonEqualPressed() {
    history.innerHTML += screen.innerHTML;

    query += screen.innerHTML;
    try {
        screen.innerHTML = eval(query);
    } catch (err) {
        alert('Bad math expression');
        buttonClearPressed();
    }
}

// function when 'C' is pressed
function buttonClearPressed() {
    screen.innerHTML = '0';
    history.innerHTML = '';
    query = '';
}
