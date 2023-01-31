const calculateButton = document.querySelector("#calculate-button");
const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const resultDisplay = document.querySelector("#result");

function calculateResult(num1, num2, operator) {
  let result;
  
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  
  return result;
}

calculateButton.addEventListener("click", function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  let operator;
  const additionRadio = document.querySelector("#addition");
  const subtractionRadio = document.querySelector("#subtraction");
  const multiplicationRadio = document.querySelector("#multiplication");
  const divisionRadio = document.querySelector("#division");
  
  if (additionRadio.checked) {
    operator = "+";
  } else if (subtractionRadio.checked) {
    operator = "-";
  } else if (multiplicationRadio.checked) {
    operator = "*";
  } else if (divisionRadio.checked) {
    operator = "/";
  }
  
  const result = calculateResult(num1, num2, operator);
  
  resultDisplay.textContent = "Result: " + result;
});
