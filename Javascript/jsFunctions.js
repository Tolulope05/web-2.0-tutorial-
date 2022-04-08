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
    let rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand)
} //rollDie()


function greet(firstName) {
    console.log(`Hi ${firstName}. Its so great to finally meet you.`)
}
greet('tolu') //Hi tolu. Its so great to finally meet you./
greet('nonso') //Hi nonso. Its so great to finally meet you./

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
repeat('hi', 3) // hihihihi



