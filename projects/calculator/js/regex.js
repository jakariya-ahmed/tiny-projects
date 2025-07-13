/**
 * Character Classes
 * ========================
 * {/\d/} => Digit(0-9) => '5','8'
 * {/\D/} => Non-digit => 'a' 
 * {/\w/} => Word Character (a-z,A-Z,0-9)
 * {/\W/} => No-word charater '%'
 * {/\s/} => Whitespace (space,tab,newline) ' '
 * {/./} => Any character (except newline) 'b'
 * [abc] => a or b or c 'a'
 * [^abc] => Not a, b, or c 'x'
 * 
 */

function digitFilter(inputData) {
    const regex = /\d+/; // check at list 1 or more digits
    const regex2 = /\d*/; // check 0 or more digits
    const result = regex.test(inputData);
    console.log(result);
}
// digitFilter('Products are avaiable');

// non-digit character 
function nonDigitRegex(input) {
    const regex = /\D/; // any one non-digit character
    const regex2 = /^\D+$/; // must be entirely non-digit characters
    const result = regex.test(input);
    console.log(result);
}
/**
 * ^ => Start of string
 * \D+ => one or more non-digit character 
 * $ => End of string
 */

// nonDigitRegex('Jakariya Ahmed'); // true
// nonDigitRegex('899900'); // false
// nonDigitRegex('#$@!'); // true
// nonDigitRegex('9000000');// false
// nonDigitRegex('jakariya93'); //true


/**
 * /\w/ => single word character => a, Z, 5, __
 * /\W/ => Non-word character => @, #, !, space, -
 * /\w+/ => One or more word characters => Hello1234_
 * /^\w+$/ => Entire string must be word charter => "user_name"
 * 
 * Match:
 * 1. Match any letter: A-Z, a-z
 * 2. Match any digit: 0-9
 * 3. the underscore: __
 * 
 * Not Match:
 * 1. spaces
 * 2. Symbols like @, #, !, ., -
 * 
 * ================
 * usecase 
 * user name validation 
 * 
 */

function wordChar(input) {
    const pattern = /\w/;
    const patter2 = /\W/;
    const patter3 = /^\w+$/; // start string and end string
    console.log(patter3.test(input));
}
// if has any letter, number === true
// wordChar('#10 Products are avaialbe'); // true
// wordChar('J!'); // true
// wordChar('!$#'); //False

// if avaialbe any special character # or $ === true 
// wordChar('jakariya9@'); // true
// wordChar('@#&'); // true
// wordChar('JakariyaAhmed'); // true

// only string not whitespace, special characters
// wordChar('29404049 jfjfj');// false
// wordChar('29404049jfjfj'); // true
// wordChar('29404049_jfjfj'); // true


/**
 * user name validation
 * 
 */
function userNameValidation(input) {
    const regex = /^\w{5,20}$/; // 4-20 word characters
    const result = regex.test(input);
    // console.log(result);
    if (result) {
        console.log(input + ' is Valid');
    }else {
        console.log('Enter Valid First Name');
    }
}
// userNameValidation('jakariya_93');

/** full name validation 
 * [A-Z][a-z] => First name start with Capital then lower
 * (?: ) => Non-capturing group
 * 
 */
function fullNameValidation(input) {
    const regex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/;
    const result = regex.test(input);
    if (result) {
        console.log('You name is: '+ input);
    } else {
        console.log('You are typing invalid name');
    }
}

// fullNameValidation('Jakariya Ahmed');


/** Name validation with middle name
 * ^ => start with string
 * [a-zA-Z]+ => First word: one or more letter (upper or lowercase)
 * (?: ) => Non-capturing group
 * (\.?)  => Optional dot(.) e.g, 'Md.' or 'Dr.'
 * \s => Single space between words 
 */
function middleNameValidation(input) {
    const regex = /^[a-zA-Z]+(?:\.?\s[a-zA-Z]+)*$/;
    const result = regex.test(input);
    if (result) {
        console.log('Hello: ' + input );
    } else {
        console.log('Invalid name');
    }
}

// middleNameValidation('jakariya ahmed');




/**
 * Quantifiers
 * ========================
 * {*} => 0 or more times => 'a*' matches '', 'a', 'aaa'
 * {+} => 1 or more times => 'a+' mathes 'a', 'aaa'
 * {?} => 0 or 1 time => 'a?' matches '', 'a'
 * {n} => Exactly n times => 'a{3}' matches 'aaa'
 * {n,} => n or more times => 'a{2,}' matches 'aa', 'aaa'
 */






/**
 * Anchors
 * ========================
 * {^} => Start of string => '^Hello'
 * {$} => End of string  => 'world$'
 * {\b} => Word boundary => \bthe\b
 * {\B} => not a word boundary => \Blend
 * 
 * 
 */




/**
 * Group and Ranges
 * ========================
 * {(abc)} => Group 'abc'
 * {[a-z]} => Any lowercase letter
 * {[A-Z]} => Any Uppercase Letter
 * {[0-8]} => Any Digit
 * {[^0-9]} => Anything but only digits
 */






/**
 * Flag (Modifiers)
 * ========================
 * {g} => Global match (all occurrences)
 * {i} => Case-insensitive
 * {m} => Multi-line search
 * {s} => Dot matches newline
 * {u} => Unicode support
 * {y} => Sticky match (from last index)
 */



/**
 * String Method Using RegEx
 * ========================
 * str.match() => Match a pattern
 * str.replace() => Replace matched part
 * str.search() => Search for pattern index
 * str.split() => Split string using pattern
 * regex.test() => Return true / fase if mathes
 * regex.exec() => Returns first match object
 */






















