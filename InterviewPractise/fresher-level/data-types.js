/* =============== Data Types in JavaScript =============== */
// JavaScript has 2 types data:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

/* ================= Primitive Data Types ===================== 
Primitive data types are
the most basic, built-in data types provided by a programming language to represent simple, single values like integers, floating-point numbers, characters, and booleans. They are not objects, are immutable (cannot be changed), and are stored directly in memory (stack) for high performance. 
*/ 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

/* ================= Non-Primitive Data Types ===================== 

👉 Complex data
👉 Mutable (value change করা যায়)
👉 Memory-তে reference ধরে

*/

// 1. Object
// 2. Array
// 3. Function
// 4. Date, Map, Set etc. 



/* Type Conversion in JavaScript 
    1. Implicit Conversion (Type Coercion)
    2. Explicit Conversion(Type Conversion)
*/



// ========== Implicit Conversion ========== */

let result = '5' + 10; // '510' string concatenation
let result2 = '5' - 2; // 3  subtraction (string converted to number) 
let result3 = '5' - '2' // 2  division (string converted to number)
let result4 = '5' * 2; // 10 multiplication (string converted to number)
let result5 = '5' * '2' // 10 multiplication (string converted to number)
console.log(result5);
