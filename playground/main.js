function calc() {

    let firstNumber = parseInt(document.querySelector("#firstNumber").value);
    let secondNumber = parseInt(document.querySelector("#secondNumber").value);
    let sign = document.querySelector("#sign").value;

    switch (sign) {
        case '+':
            document.getElementById("result").value = firstNumber+secondNumber;
            break;
        case '-':
            document.getElementById("result").value =firstNumber-secondNumber;
            break;
        case '/':
            document.getElementById("result").value =firstNumber/secondNumber;
            break;
        case '*':
            document.getElementById("result").value =firstNumber*secondNumber;
            break;

    }

}