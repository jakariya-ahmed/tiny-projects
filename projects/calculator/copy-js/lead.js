// main.js
// =============================
// Entry point. Connects UI events with calculator logic using OOP modules.

import { Calculator } from './calculator.js';
import { UI } from './ui.js';

const calc = new Calculator();

// Handle all button clicks
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;
    // alert(action);
    if (value) {
      calc.input(value);
      UI.updateDisplay(calc.getDisplay());
    }

    if (action === 'clear') {
      calc.clear();
      UI.updateDisplay(calc.getDisplay());
    }

    if (action === 'back') {
      calc.backspace();
      UI.updateDisplay(calc.getDisplay());
    }

    if (action === 'calculate') {
      const result = calc.calculate();
      UI.updateDisplay(result);
    }
  });
});

// Init display
UI.updateDisplay(calc.getDisplay());
