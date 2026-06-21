const display = document.getElementById('display');

// Adds number or operator to the screen
function appendValue(input) {
  display.value += input;
}

// Clears the screen
function clearDisplay() {
  display.value = "";
}

// Calculates the mathematical expression
function calculate() {
  try {
    // eval evaluates the string as a math expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error"; // Handles invalid expressions
  }
}
