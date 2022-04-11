/**
 * Default parameters
 * e.g I want user to roll a die and I want default numbers if they dont pass any number in
 */

// const rollDie = function (num) {
//     num = typeof num !== 'undefined' ? num : 6; // rollDie() still gives out a value 
//     num = typeof num >= 6 ? num : 6; //rollDie(30) will still give a random number between 1-6
//     return Math.floor(Math.random() * num) + 1
// }; // Old way of doing things.

// const rollDie = function (num) {
//     if (num === undefined) {
//         num = 6
//     }; // rollDie() still gives out a value

//     if (num >= 6) {
//         num = 6
//     }; //rollDie(30) will still give a random number between 1-6

//     return Math.floor(Math.random() * num) + 1;
// };  // Old Way of doing it.

/**
 * NEW way of passing Default parameter
 * 
 */
const rollDie = function (num = 6) {

    return Math.floor(Math.random() * num) + 1;
};

// const greet = function (msg, person) {
//     return `${msg}, ${person}!`
// }

// const greet = function (msg = 'Hey There', person) {
//     return `${msg}, ${person}!`
// } //your default paramter should come second after all the parameter
// greet("Tolu") // 'Tolu, undefined!'

const greet = function (person, msg = 'Hey There') {
    return `${msg}, ${person}!`
} // greet("Tolu") //'Hey There, Tolu!'
  // greet('Whatsup','Tolulope') //'Tolulope, Whatsup!'



