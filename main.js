/* Coded by Harshit Seksaria */

var query = '';
const screen = document.getElementById('screen-text');
const history = document.getElementById('history');

// if the service worker API is available
if('serviceWorker' in navigator) {
    // then on window load
    window.addEventListener('load', function() {
        // register a service worker
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // registration is successful
            console.log('[Main] Successfully registered a service worker!');
        }, function(err) {
            // registration failed
            console.log('[Main] Could not register a service worker: ', err);
        });
    });
};

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
