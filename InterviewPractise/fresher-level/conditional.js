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
    // console.log(i); // print 1 to 20 numbers
}


/** Five Basic Problems and Solve by for loop */
// 1. Find the sum of first n natural numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i // sum = sum + i;
}
// console.log(`The sum of first ${n} natural numbers is: ${sum}`);


 // 2. Multiplication Table of a number
 let num = 5;
    for (let i = 1; i <= 10; i++) {
        // console.log(`${num} * ${i} = ${num * i}`);
    }


// 3. Count even number
let countEven = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        countEven++;
        // console.log(i);
    }
}

// console.log(`Total even numbers between 1 and 20: ${countEven}`);

// 4. Count odd number
let coundOdd = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        coundOdd++;
        // console.log(i);
    }
}


// 5. Reverse a string
let str = "Bangladesh";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; // reversedStr = reversedStr + str[i];
}

// console.log(`Reversed String: ${reversedStr}`);