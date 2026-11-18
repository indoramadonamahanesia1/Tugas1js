let currentNumber = "0";
let previousNumber = null;
let operator = null;
let resetDisplay = false;

const result = document.getElementById("result");

function updateDisplay() {
    result.textContent = currentNumber;
}

function appendNumber(number) {

    if (resetDisplay) {
        currentNumber = "0";
        resetDisplay = false;
    }

    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    if (currentNumber === "0" && number !== ".") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

    updateDisplay();
}

function Operator(op) {

    if (operator !== null) {
        calculate();
    }

    previousNumber = Number(currentNumber);
    operator = op;
    resetDisplay = true;
}

function calculate() {

    if (operator === null || resetDisplay) return;

    let current = Number(currentNumber);
    let hasil;

    switch (operator) {
        case "+":
            hasil = previousNumber + current;
            break;

        case "-":
            hasil = previousNumber - current;
            break;

        case "*":
            hasil = previousNumber * current;
            break;

        case "/":
            if (current === 0) {
                currentNumber = "Tidak Bisa Di Bagi 0";
                operator = null;
                updateDisplay();
                return;
            }
            hasil = previousNumber / current;
            break;
    }

    currentNumber = String(Number(hasil.toPrecision(12)));

    operator = null;
    previousNumber = null;
    resetDisplay = true;

    updateDisplay();
}

function acDisplay() {
    currentNumber = "0";
    previousNumber = null;
    operator = null;
    resetDisplay = false;

    updateDisplay();
}

function dellDisplay() {
    if (currentNumber === "0") {
        return;
    }
    currentNumber = currentNumber.slice(0, -1);

    if(currentNumber === "" || currentNumber ==="-"){
        currentNumber = "0";
    }
    updateDisplay();
}

function percentage() {

    if (currentNumber === "Error") return;
    currentNumber = String(Number(currentNumber) / 100);

    updateDisplay();
}
