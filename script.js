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
  if (y === 0) {
    displayValue = "";
    firstValue = "";
    result = "";
    operator = "";
    return "don't do it";
  } else {
    return x / y;
  }
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
let operator = "";

let displayMain = document.querySelector(".displayMain");
let displayUpper = document.querySelector(".displayUpper");

const operands = document.querySelectorAll(".operand");

operands.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.textContent;
    displayMain.innerText = displayValue;

    if (displayUpper.textContent.includes("=")) {
      displayUpper.innerText = "";
    }
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue != "" && displayValue != "0" && operator === "") {
      firstValue = displayValue;
      displayValue = "";
      operator = button.textContent;
      displayUpper.innerText = `${firstValue} ${operator}`;
    } else if (displayValue != "" && displayValue != "0" && firstValue != "") {
      displayUpper.innerText = `${firstValue} ${operator} ${displayValue} =`;
      displayValue = operate(
        operator,
        parseFloat(firstValue),
        parseFloat(displayValue)
      );
      displayMain.innerText = displayValue;
      firstValue = displayValue;
      displayValue = "";
      operator = button.textContent;
      displayUpper.innerText = `${firstValue} ${operator}`;
    }
  });
});

const equals = document.getElementById("equalsBtn");

equals.addEventListener("click", () => {
  if (firstValue != "" && displayValue != "") {
    displayUpper.innerText = `${firstValue} ${operator} ${displayValue} =`;
    displayValue = operate(
      operator,
      parseFloat(firstValue),
      parseFloat(displayValue)
    );
    displayMain.innerText = displayValue;
    displayValue = "";
    firstValue = "";
    operator = "";
  }
});

const clear = document.getElementById("clearBtn");

clear.addEventListener("click", () => {
  displayValue = "";
  firstValue = "";
  operator = "";
  displayMain.innerText = "0";
  displayUpper.innerText = "";
});

const decimal = document.getElementById("decimalBtn");

decimal.addEventListener("click", () => {
  if (
    !displayMain.textContent.includes(".") &&
    !(displayMain.innerText === "0")
  ) {
    displayValue += decimal.textContent;
    displayMain.innerText = displayValue;
  }
});

const zero = document.getElementById("zeroBtn");

zero.addEventListener("click", () => {
  if (!(displayMain.innerText === "0")) {
    displayValue += zero.textContent;
    displayMain.innerText = displayValue;
  }
});

const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  if (!(displayMain.innerText === "0")) {
  }
});
