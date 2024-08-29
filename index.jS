function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("display").value += number;  //value = value + number;
}

function appendOperator(operator) {
    let display = document.getElementById("display").value;
    if (display !== "" && !isNaN(display.slice(-1))) {
        document.getElementById("display").value += operator;
    }
}

function calculateResult() {
    let display = document.getElementById("display").value;
    if (display) {
        try {
            document.getElementById("display").value = eval(display);
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }
}
