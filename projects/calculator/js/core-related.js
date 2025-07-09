/**
 * how to work slice() 
 * the slice() method is used to extract a portion of
 * a string or array without modifiying the original data
 * 
 * {string}
 * {array}
 * string.slice(startIndex, endIndex)
 * array.slice(startIndex, endIndex)
 * Negative index means counting from the end
 * slice(-1) count last index
 * slice(-2) count last 2 index
 * slice(-3) count last 3 index
 * 
 * slice(0) count all string or array
 * slice(1) start 1 number index
 * slice(2) start 2 number index
 * slice(3) start 3 number index
 */

const str = '123+5';
const arr = ['1', '2', '3', '4', '5'];
const name = 'Jakariya Aman';
const lastChar = str.slice(0);
const lastArray = arr.slice(2);
/**
 * How work slice function
 * slice(2) → skip index 0,1 and start indexing from index 2 
 *  or exclude index 0, 1 and include all after index 2
 * slice(-2) → include last two index(-1, -2) and exclude all before them
 *  or just indexing last two characters(index-2, -1) and skip all before them
 * slice(2, -2) → means starting index includes from index 2 
 *   and starting excludes from index(-2, -1);   
 * 
*/

// console.log(name.slice(-2));



// console.log(lastChar);

// check the calculator input validation slice() 
const expression = "15+34*";
const lastNum = expression.slice(-1);


// Extract File Extension from a Filename
function extension(file) {
    const index = file.lastIndexOf('.');
    const extension =  index !== -1 ? file.slice(index + 1) : '';
    return extension;
}


/**
 * const index = fileName.lastIndexOf('.') it find out '.' in name
 * file.slice(index + 1)
 * index find which index is '.' like dot found 7 number index (index + 1)
 * means (7 + 1) = 8 skip the 8 index with dot and (index + 1) start the after dot
 */
// console.log(extension('resume.pdf'));
// console.log(extension('image.jpg'));
// console.log(extension('00001.video'));

// Display Preview message
function messagePreview(msg) {
    const previw = msg.slice(0, 20) + '...';
    // console.log(previw);
} 

messagePreview('Hello! Jakariay Ahmed , Your Repor is ready');

// Custom Pagination
function pagination() {
    const pages = [1, 2, 3, 4];
    const page1 = pages.slice(0, 3);
    const page2 = pages.slice(3, 6);
}



/**
 * How work padStart(targetLength, [, padString])
 */

// Padding with zeros to make fixed length number
function paddedFixNum(num) {
    const paddedNum = num.padStart(5, '0');
    // console.log(paddedNum);
}
// paddedFixNum('45');

// Padding with spaces 
function spaces(word) {
    const paddedWord = word.padStart(6)
    console.log(`'${paddedWord}'`);    
}

// spaces('Hi!');



// Mask a Credit Card Number
function cardNumber(number) {
    const masked = number.slice(-4).padStart(number.length, '*');
    console.log(masked);
}
// cardNumber('133373890093887');


/**
 * padEnd() function and use case
 * 
 */

// Creating Uniform Length Codes / IDs

function uniformCode(id) {
    const fullId = id.padEnd(6, 'X');
    console.log(fullId);
}
// uniformCode('345');

function fileLog() {
    const status = 'success';
    console.log(status.padEnd(15) + '✔');
}
fileLog();





