/**
  * =================================
 * Function
 * =================================
 * - Functions allows a reusable moular code
 * - we define a chunk of code that we can use later
 * - We can use it anytime
 * - We can pass in arguments into a
 * MB: We pass a *parameter* into a function (),
 * - We pass an argument into the parenthesis e.g firstName
 */

function rollDie() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand)
} //rollDie()


// function greet(firstName) {
//     console.log(`Hi ${firstName}. Its so great to finally meet you.`)
// }
// greet('tolu') //Hi tolu. Its so great to finally meet you./
// greet('nonso') //Hi nonso. Its so great to finally meet you./

function greet(firstName, lastName) {
    console.log(`Hey there ${firstName} ${lastName[0]}.`)
}
greet('tolulope', 'fakunle') // Hey there tolulope f.

/**
 * =================================
 * Function
 * =================================
 * A function that sum two numbers
 * A function that subtracts two numbers
 * A function that multiplies two numbers
 * A function that divides two numbers
 * A function that raise two numbers to power of 
 */

function sum(a, b) {
    let result = a + b;
    return result;
    sum(5, 6) //11
}
function subtract(a, b) {
    let result = a - b;
    return result;
    sub(6, 6) //1
}
function multiply(a, b) {
    let result = a * b;
    return result;
    multiply(5, 6) //30
}
function divide(a, b) {
    let result = a / b;
    return result;
}
divide(6, 5) //1.2
function power(a, b) {
    let result = a ** b;
    return result;
}
power(6, 5) //7776

/**
 * bright is a function can be passed into a variable,
 * This is to show functon can be passed into a variable 
 * 
 */

let bright = function (name) {
    console.log(`Hey, I am  ${name} a bright software engineer.`)
} //bright('tolulope') => Hey, I am  tolulope a bright software engineer.

/** =================================
 * Function
 * =================================
 * A function that accepts a string and repeat that string multiple times
 */

function repeat(str, num) {
    let result = '';
    for (let i = 0; i <= num; i += 1) {
        result += str;
    }
    console.log(result)
}
repeat('hi', 3) // hihihihi

/**
 * CallTwice
 * Higher order Function 
 * Functions that operate on/with other functions;
 * They can accept other functions as an argument
 * Return a function
 */

function callTwice(twice) {
    twice();
    twice();
} //callTwice(rollDie);

function callTentimes(ten) {
    for (let i = 1; i <= 10; i++) {
        ten()
    }
} //callTentimes(rollDie); 

// function makeMiseryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('Congrats, I am a good Number');
//             console.log('You won a million Dollar');
//         }
//     } else if (rand < 0.5) {
//         return function () {
//             alert('Oh No, I am a bad Number');
//             alert('You have been infected by a computer virus');
//         }
//     }
// }
// // let misery = makeMiseryFunc()
// // miserty() => gives the log

/**
 * A function that generates a function based on some inputs
 * Return a function that test whether a value is between min and max
 */
// function makeBetwenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max
//     }
// }
// const isChild = makeBetwenFunc(0,18);
// const isAdult = makeBetwenFunc(19,64);
// const isSenior =makeBetwenFunc(65,120);

/**
 * Function Methods
 * We can add functions as properties on objects
 * Every method is a function, but not every function is a method
 */

const myMath = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    power: function (x, y) {
        return x ** y;
    },
}
