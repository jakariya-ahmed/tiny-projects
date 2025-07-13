// main.js
//==========================
// Entry point. Connects UI events with calculator logic using OOP modules.
import { Calculator } from "./calculator.js"
import { UI } from './ui.js';

const calc = new Calculator();
// console.log(calc.expression);

// Buttton refence for handle events
let btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        const action = btn.dataset.action;
        if (value) {
            calc.input(value);
            UI.updateDisplay(calc.getDisplay());
        }
        // clear input
        if (action === 'clear') {
            calc.clear()
            UI.updateDisplay(0);
        } 
        // clear input
        if (action === 'back') {
            calc.backspace()
            UI.updateDisplay(calc.getDisplay());
        } 
        // claculate 
        if (action === 'calculate') {
            calc.calculate();
             UI.updateDisplay(calc.getDisplay());
        }
    })
});
// console.log(calc._getLastNumberPart());











