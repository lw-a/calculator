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

    case "*":
      return multiplication(x, y);
      break;

    case "÷":
      return division(x, y);
      break;
  }
}

let firstValue = "";
let secondValue = "";
let result = "";
let displayMain = document.querySelector(".displayMain");

const operands = document.querySelectorAll(".operand");

operands.forEach((button) => {
  button.addEventListener("click", () => {
    firstValue += button.textContent;
    displayMain.innerText = firstValue;
  });
});

const clear = document.getElementById("clearBtn");

clear.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  result = "";
  displayMain.innerText = "0";
});
