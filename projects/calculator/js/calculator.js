// calculator.js
// ===========================
// This class encapsulates all calculator logic.
// It stores current expression, evaluates it, and provides like clear/backspace
export class Calculator {
  constructor() {
    this.expression = "";
  }

/**
 * Appends a number or operator to the expression
 * Prevents invalid operators chain like ++ or --
 */

input(value) {
  if (this._isValidationInput(value)) {
    this.expression += value;
    console.log(this.expression);
  }
}


_isValidationInput(value){
  // get last character (9+,0.8-)
  const lastChar = this.expression.slice(-1)
  // Prevent double decimal in numbers
  if (value === '.' && /\d*\.?\d*$/.test(this._getLastNumberPart())) {
    if (this._getLastNumberPart().includes('.')) return false;
  }

  // Prevent duplicate operators
  if (['-', '+', '*', '/', '%'].includes(value)) {
    if (this.expression === '' || ['-', '+', '*', '/', '%'].includes(lastChar)) {
      return false
    }
  }

  // Prevent duplicate operators 
  if (['+', '-', '*', '/', '%'].includes(value)) {
    if (this.expression === '' || ['+', '-', '*', '/', '%'].includes(lastChar)) {
      return false;
    }
  }

  return true;
}





  /**
   * Extracts the last number part from the expression (used to validate decimals)
   */

_getLastNumberPart() {
  const parts = this.expression.split(/[-+*/%]/);
  return parts[parts.length - 1];
  
}

  /**
   * Calculates and returns the result of the current expression.
   * Handles divide-by-zero errors.
   */

  calculate() {
    try{
      const result = eval(this.expression);
      this.expression = result.toString()
      return this.expression;
    } catch(error){
      return 'error';
    }
  }

  
  /**
   * Clears the entire expression
   */
  clear() {
    this.expression = '';
  }

    /**
   * Removes the last character
   */

    backspace() {
      this.expression = this.expression.slice(0, -1);
    }

    
  /**
   * Returns the current expression string
   */
  getDisplay() {
    return this.expression || '0';
  }

}








