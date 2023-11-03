// Calculator state
let input = "";

function appendToDisplay(value) {
    input += value;
    updateDisplay(input);
}

function clearDisplay() {
    input = "";
    updateDisplay(input);
}

function appendNegative() {
    if (input === "" || input.charAt(0) === '-') {
        input = input.slice(1);
    } else {
        input = `-${input}`;
    }
    updateDisplay(input);
}

function updateDisplay(value) {
    document.getElementById("display").value = value;
}

function calculateResult() {
    if (input === "") return;

    try {
        input = eval(input).toString();
    } catch (error) {
        input = "Error";
    }

    updateDisplay(input);
}
