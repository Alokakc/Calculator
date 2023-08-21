
let display = document.getElementById('display');
let expression = '';

function appendValue(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function deleteLastChar() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
  }
}
