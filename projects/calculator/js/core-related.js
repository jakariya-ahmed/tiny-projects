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
// fileLog();



/**
 * split() function
 * what is split() function ?
 * the split() method divides a string into an array of substring,
 * using a specific separator
 * string.split(separator, limit);
 * sperator → The pattern (string or RegEx) that defines where to split
 * limit → (optional) => Max number of splits(array length)
*/

// Basic Example
function spiltBrekDown() {
    let result = null;
    const name = "    Jakariya ! ahmed.    aman   ?";
    // const result = name.split("");  // split every word;
    // const result = name.split(" ");// default (,) 
    // const result = name.split(" , "); // remove default (,)
    
    // Using Regular Exprestion(RegEx)
    const punctuationBySplit = name.split(/[.,!?]/) // convert string into array and word
    const punctuationByReplace = name.replace(/[.,!?]/g, '') // only removed punctuations 
    const trimed = name.trim(); // only removed left and right white space
    const joined = name.split(/\s+/).join(' '); // remove extra white space and added white space only for array 

    // Used all in one for clean sentence
    result = punctuationByReplace.trim().split(/\s+/).join(' ');// remove left & right white spaces
    // one line combo
    const removedPunctuation = name.replace(/[^\w\s]/g, '');
    result = removedPunctuation.trim().split(/\s+/).join(' ');// remove left & right white spaces
    const number = '+-/';
    const spiltOperator = number.split(/[-+*/%]/);
    // console.log(punctuationBySplit);
    // console.log(punctuationByReplace);
    // console.log(trimed);
    // console.log(joined);
    // console.log(result);
    // console.log(result);
    console.log(spiltOperator);
}
// spiltBrekDown();

// Check last Number 
const data = '';
function getLastNumber(data) {
    const parts = data.split(/[-+*/%]/);
    return parts[parts.length - 1]; 
    // const lastBySlice = parts.slice(-1);
    // console.log(parts); // return value 20
    // console.log(last); // return array[20]
}

// getLastNumber('20+2*2-7');

/**
 * includes() Method used to check a string contains a substring
 * or an array contains a substring
 * string.includes(searchValue, startIndex)
 * arr.includes(searchElement, fromIndex)
 * return true/false
 */

function checkWord(msg) {
    const resutl = msg.includes('.');
    if (resutl) {
        console.log('Yes value is cotain in sentence !');
    } else {
        console.log('No! value is not cotain in sentence !');
    }
}
// checkWord('8900.00.');

// let exp = '20+30+45+20';
// let newInput = '.';

// function inputValidation(exp, newInput) {
//     // Add the new input to current expression 
//     const updated = exp + newInput;
//     // get last part of number 
//     const parts = updated.split(/[-+*/%]/);
//     const lastNumber = parts[parts.length -1];
//     console.log('LastNumber:', lastNumber);

//     //Prevent duplicate decimal /\d*\.?\d*$/
//     if (newInput === '.' && /\d*\.?\d*$/.test(lastNumber)) {
//         if (lastNumber.includes('.')) {
//             console.log('Dot already exists - reject'); 
//             return false;
//         }
//     }

//     console.log('input is fine')

//     return true;
// }

// inputValidation(exp, newInput);




/**
 * Get last number 
 * Prevent duplicate dot(.) 
 * Cehck dot(.) is exists in new data and expression data
 * 
 * 
 * @param {*} exp 
 * @param {*} newInput 
 */

let exp = '20+30-10+20-6.5';
let newInput = '+5';
function inputValidation(exp, newInput) {
    // Get last Charackter 
    const lastChar = exp.slice(-1);
    console.log(lastChar);
    // Add new input to current expression
    const updated = exp + newInput;
    // Get last number 
    const parts = updated.split(/[-+*/%]/); // only gets number with array format like ['20','30','10','3.5']
    const lastNumber = parts[parts.length - 1]; // length 4 -1 = 3;
    console.log('lastNumber:', lastNumber);

    // Prevent duplicate decimal(3..5) and accept a decimal format (2.4, 5.3)
    if (newInput === '.' && /\d*\.?\d*$/.test(lastNumber)) {
         // If dot(.) is exist return false
        if (lastNumber.includes('.')) {
            console.log('Dot already exists 😒');
            return false;
        }
    }

    /**
     * Prevent duplicate operetors 
     * ['-','+','*','/','%'].includes(newInput) this conditon check 
     * any new input is operator. yes 
     * exp === '' || ['-','+','*','/','%'].includes(lastChar) this condition check
     * expression is empty or last charackter is operator if yes more
     * operator is not allow
     */
    if (['-','+','*','/','%'].includes(newInput)) {
        if (exp === '' || ['-','+','*','/','%'].includes(lastChar)){
            console.log('Invalid operator:', lastChar);
            return false;
        }
    }
    return true;

}

// inputValidation(exp, newInput);












