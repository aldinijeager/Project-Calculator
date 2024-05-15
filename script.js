function add(a, b){
    return +a + +b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

let num1,
    num2,
    operator;

function operate(num1, num2, operator){
    
    switch (operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

let display = "";

let numButtons = document.querySelectorAll(".numbers button");
let screenDisplay = document.querySelector(".screen");

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        display += button.value;
        screenDisplay.textContent = display;
    })
});

let optionButtons = document.querySelectorAll(".options button");

optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.value){
            case "clear":
                screenDisplay.textContent = "0";
                console.log(button.value)
                break;
        }
    })
});
