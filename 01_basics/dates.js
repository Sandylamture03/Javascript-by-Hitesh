// Simple Calculator App

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Function to calculate result based on operator
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

// Example usage
console.log("Addition: 5 + 3 =", calculate(5, 3, "+"));
console.log("Subtraction: 10 - 4 =", calculate(10, 4, "-"));
console.log("Multiplication: 6 * 7 =", calculate(6, 7, "*"));
console.log("Division: 20 / 5 =", calculate(20, 5, "/"));
console.log("Division by zero: 10 / 0 =", calculate(10, 0, "/"));

// Interactive calculator function (for demonstration)
function calculator() {
  const num1 = 15;
  const num2 = 5;

  console.log("\nCalculator Results:");
  console.log(`${num1} + ${num2} = ${calculate(num1, num2, "+")}`);
  console.log(`${num1} - ${num2} = ${calculate(num1, num2, "-")}`);
  console.log(`${num1} * ${num2} = ${calculate(num1, num2, "*")}`);
  console.log(`${num1} / ${num2} = ${calculate(num1, num2, "/")}`);
}

// Run the calculator
calculator();
