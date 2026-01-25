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
// ========================== 
// Var 
// ========================== 
/* 
1. Function Scope
2. Can be re-declared
3. Can be reassigned
4. Hoisted and initialized as undefined
5. Causes bugs in large apps.
*/




// ========================== 
// let  
// ========================== 
/* 
1. Block Scope
2. Cannot be re-declared
3. Can be reassigned 
4. Hoisted but in Temporal Dead Zone (TDZ)
5. Preffered for block-scoped variables.
*/




// ========================== 
// const  
// ========================== 

/* 
1. Block Scope
2. Cannot be re-declared
3. Cannot be reassigned 
4. Must be initialized during declaration
5. Object/Array can be mutated
6. Preffered for constants and unchanging references.
*/

// =========== Function Scope in var  =========== 
function functionScope() {
    var msg = "Hello, come from Function scope!";
    if (true) {
        var inner_msg = "Hello, come from Inner Block! in function scope";
            inner_msg = "Changed Inner Block Message"; // Re-assigned
        console.log(msg);
    }
    console.log(inner_msg); // ✅ Accessible
}
functionScope();

//console.log(msg); // ❌ ReferenceError: msg is not defined


// =========== Block Scope in let ===========
function blockScope()  {
    if (true) {
        let greeting = "Hello, come from Block scope!";
        console.log(greeting); // ✅ Accessible
    }
    //console.log(greeting); // ❌ ReferenceError: greeting is not defined
}

blockScope();


// =========== Block Scope in const ===========
function constBlockScope()  { 
    const age = 26;
    // age = 30; // ❌ TypeError: Assignment to constant variable.
    if (true) {
        const sl_number = 1001;
        console.log(age); // ✅ Accessible
    }
    // console.log(sl_number); // ❌ ReferenceError: sl_number is not defined
}

constBlockScope();


// =========== Re-decleration in var ===========
var username = "Jakariya Aman";
var username = "Jakariya";
var username = "Aman";

console.log(username); // Allowed redeclaration, Output: Aman

// =========== Re-assigned ===========
var email = "aman@gmail.com";
email = "jakariya@gmail.com";
console.log(email); // Allowed reassignment, Output: jakariya@gmail.com

// =========== Hoisted in var ===========
// JavaScript moves variable declaration to the top of its scope 
// before code execution.

var student_id;
console.log(student_id); // Hoisted + initialized as undefined
student_id = 101; // Output: undefined



