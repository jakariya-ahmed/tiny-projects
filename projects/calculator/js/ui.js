// ui.js
// =============================
// Handles DOM manipulation and rendering of calculator display.

export const UI = {
  displayEl: document.getElementById('display'),

  /**
   * Updates the calculator screen with current value
   * @param {string} value - Value to display
   */
  updateDisplay(value) {
    this.displayEl.value = value;
  }
};
