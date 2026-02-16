/** Conditaonal statement
 * if / else 
 * switch
 * Loops: for, while, do while
 * break and continue
 * 
 */



// if / else
    let age = 18;
    if (age >= 18) { 
        console.log('You are an adult.');
    }  else {
        console.log('You are a minor.');
    }

// Multiple conditins with else if 
    let score = 20;
    if (score >= 90) {
        console.log('Grade: A');
    } else if (score >= 80) {
        console.log('Grade: B');
    } else {
        console.log("Failed");
    }



// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log("Invalid Day");
}


// For Loop: known number of iterations
for (let i = 1; i <= 20; i++) {
    console.log(i); // print 1 to 20 numbers
}


/** Five Basic Problems and Solve by for loop */
// 1. Find the sum of first n natural numbers
let n = 100;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i // sum = sum + i;
}
// console.log(`The sum of first ${n} natural numbers is: ${sum}`);


 // Multiplication Table of a number
 let num = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }

