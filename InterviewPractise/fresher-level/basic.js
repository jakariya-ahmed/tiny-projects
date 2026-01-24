/**=================
 * ==== What is JS? =====================
 * JavaScript is a high-lever, dyanmic programming language mainly used 
 * to make web pages interactive. It runns in broweser and on servers unsing Node.js
 * ================== What is Interpreter Language =====================
 *  An interpreted language runs code line by line usning interpreter, without 
 * converting entire code into machine code beforehand. Like PHP, Python 
 * 
 *  ================= What is a Complied language =====================
 * A compiled language converts the entire source code into machine code using a 
 * compiler before execution. Examples include C, C++, and Java.
 *  ============== Is JavaScript Interpreted or Compiled ? =====================
 * JavaScript is an interpreted language, which means that it is executed line by line 
 * by the browser's JavaScript engine.
 * Unlike compiled languages, which are converted into machine code before execution, 
 * JavaScript code is executed directly by the browser at runtime. 
 * This allows for rapid development and testing, as changes to the code can be seen 
 * immediately without the need for a separate compilation step.
 * 
 * OR 
 * JavaScript is a JIT (Just-In-Time) compiled language.
 * It is executed by JavaScript engines that interpret and compile the code at runtime 
 * for performance optimization.
 * 

/* ================= var, let, const ===================== */
// Var

/* 
1. Function Scope
2. Can be re-declared
3. Can be reassigned
4. Hoisted and initialized as undefined
5. Causes bugs in large apps.
*/


// =========== Function Scope =========== 
function testScope() {
    var msg = "Hellow, come form function scope!";
    console.log(msg); //✅ Accessible here
}

testScope(); // Hellow, come form function scope!

//console.log(msg); // ❌ ReferenceError: msg is not defined

// =========== Re-declared ===========
var username = "Jakariya Aman";
var username = "Jakariya";
var username = "Aman";

console.log(username); // Aman 







