function addition(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return addition(x, y);
      break;

    case "-":
      return subtraction(x, y);
      break;

    case "x":
      return multiplication(x, y);
      break;

    case "÷":
      return division(x, y);
      break;
  }
}

let displayValue = "";
let firstValue = "";
let result = "";
let operator = "";
let displayMain = document.querySelector(".displayMain");
let displayUpper = document.querySelector(".displayUpper");

const operands = document.querySelectorAll(".operand");

operands.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.textContent;
    displayMain.innerText = displayValue;
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((button) => {
  button.addEventListener("click", () => {

    if (displayValue != "") {
      firstValue = displayValue;
      displayValue = "";
      operator = button.textContent;
      displayUpper.innerText = `${firstValue} ${operator}`;
    }
  })
})

const equals = document.getElementById("equalsBtn")

equals.addEventListener("click", () => {
  displayUpper.innerText = `${firstValue} ${operator} ${displayValue} =`;
  displayValue = operate(operator, parseInt(firstValue), parseInt(displayValue));
  displayMain.innerText = displayValue;

});

const clear = document.getElementById("clearBtn");

clear.addEventListener("click", () => {
  displayValue = "";
  secondValue = "";
  result = "";
  displayMain.innerText = "0";
});
