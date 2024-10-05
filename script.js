let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let buttons = document.querySelectorAll('.button');

let expression = '';
let result = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                result = eval(expression);
                display.value = result;
                expression = '';
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        } else if (button.value === 'C') {
            display.value = '';
            expression = '';
        } else {
            expression += button.value;
            display.value = expression;
        }
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
    expression = '';
});
