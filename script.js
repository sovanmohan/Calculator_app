let result = document.getElementById("result");

function insertValue(value) {
    if (result.value == "0") {
        result.value = value;
    } else {
        result.value += value;
    }
}

function clearResult() {
    result.value = "0";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = "Error";
    }
}
