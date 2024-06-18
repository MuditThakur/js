let currentDisplay = '';

function updateDisplay() {
  document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  updateDisplay();
}

function appendToDisplay(value) {
  currentDisplay += value;
  updateDisplay();
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay).toString();
  } catch (e) {
    currentDisplay = 'Error';
  }
  updateDisplay();
}
