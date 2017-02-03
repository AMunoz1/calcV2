/** CALCULATOR
 *
 */
var current_input = "0";
var memory = "0";
var operator = 0;
var mode = "deg";
/**
 * Helper function for displaying the current input
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}
/**
 * Adds a digit to the current input
 */
function addDigit(dig) {
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else if (current_input.length <= 12) {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}
/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}
/**
 * Clears everything
 */
function allClear() {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = current_input; //store value
    current_input = "0";
    displayCurrentInput();
}
/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    }
    if (operator == 2) {
        if (eval(current_input) == 0) {
            current_input = "ERROR";
        }
        else {
            current_input = eval(memory) / eval(current_input);
        }
    }
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    }
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    }
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * changes the current input sign to either - or +
 */
function changeSign() {
    current_input = current_input * (-1);
    displayCurrentInput();
}
/**
 * clears the current input to 0
 */
function Clear() {
    current_input = "0";
    displayCurrentInput();
}
/**
 * Chnges the current input to a percentage
 */
function percentage() {
    current_input = current_input / 100;
    displayCurrentInput();
}
/**
 * Calculates the factorial of the current input
 */
function factorial() {
    var final_value = current_input;
    var fact = final_value;
    for (i = final_value - 1; i > 1; i--) {
        fact = fact * i;
    }
    current_input = fact;
    displayCurrentInput();
}
/**
 * Calculates the square of the current input
 */
function square() {
    current_input = Math.pow(current_input, 2);
    displayCurrentInput();
}
/**
 * Calculates the square root of the current input
 */
function squareRoot() {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
}
/**
 * Calculates the inverse of the current input
 */
function inverse() {
    current_input = (1 / current_input);
    displayCurrentInput();
}
/**
 * Calculates the sine of the current input
 */
function sin() {
    current_input = Math.sin(current_input);
    displayCurrentInput();
}
/**
 * Calculates the cosine of the current input
 */
function cos() {
    current_input = Math.cos(current_input);
    displayCurrentInput();
}
/**
 * Calculates the tagent of the current input
 */
function tan() {
    current_input = Math.tan(current_input);
    displayCurrentInput();
}
/**
 * Makes the current input equal to Pi
 */
function Pi() {
    current_input = "3.1415926535897";
    displayCurrentInput();
}
/**
 * Calculates the radian of the current input
 */
function radian() {
    if (mode == "deg") {
        current_input = current_input / 57.3;
        displayCurrentInput();
    }
    mode = "rad";
}
/**
 * Calculates the degree of the current input
 */
function degree() {
    if (mode == "rad") {
        current_input = current_input * 57.3;
        displayCurrentInput();
    }
    mode = "deg";
}
