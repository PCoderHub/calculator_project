let basicCalculatorForm = document.getElementById("basic-calculator");
let advancedCalculatorForm = document.getElementById("advanced-calculator");
let operation = "";
let result = 0;

let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let squareButton = document.getElementById("square");
let cubeButton = document.getElementById("cube");

// Event listeners for operator buttons

addButton.addEventListener("click", () => {
  operation = "add";
});

subtractButton.addEventListener("click", () => {
  operation = "subtract";
});

multiplyButton.addEventListener("click", () => {
  operation = "multiply";
});

divideButton.addEventListener("click", () => {
  operation = "divide";
});

squareButton.addEventListener("click", () => {
  operation = "square";
});

cubeButton.addEventListener("click", () => {
  operation = "cube";
});

// Event listeners for both basic and advanced calculator forms

basicCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let first = basicCalculatorForm["first"].value;
  let second = basicCalculatorForm["second"].value;

  if (operation === "add") {
    result = Number(first) + Number(second);
  } else if (operation === "subtract") {
    result = Number(first) - Number(second);
  } else if (operation === "multiply") {
    result = Number(first) * Number(second);
  } else if (operation === "divide") {
    result = Number(first) / Number(second);
  } else {
    alert("Invalid operation");
    return;
  }
  document.getElementById("result").innerHTML = result;
  basicCalculatorForm["first"].value = "";
  basicCalculatorForm["second"].value = "";
  operation = "";
});

advancedCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let digit = Number(advancedCalculatorForm["digit"].value);

  if (operation === "square") {
    result = digit ** 2;
  } else if (operation === "cube") {
    result = digit ** 3;
  } else {
    alert("Invalid operation");
    return;
  }
  document.getElementById("advanced-result").innerHTML = result;
  advancedCalculatorForm["digit"].value = "";
  operation = "";
});
