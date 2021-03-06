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

const greet = function (person, msg = 'Hey There', punc = '!') {
    return `${msg}, ${person}${punc}`
} // greet("Tolu") //'Hey There, Tolu!'
// greet('Whatsup','Tolulope') //'Tolulope, Whatsup!'

/**
 * SPREAD
 * =======
 * Spread in function call and array literal
 * We are taking something and spreading it.
 * used by ...
 */

//We can spread an array
const dogFam = ['wolves', 'coyotes', 'foxes', 'jackals', 'wild dogs'];
const catFam = ['cheetah', 'puma', 'jaguar', 'leopard', 'lion', 'lynx', 'tiger', 'domestic cat'];

const allPets = [...dogFam, ...catFam]; //['wolves', 'coyotes', 'foxes', 'jackals', 'wild dogs', 'cheetah', 'puma', 'jaguar', 'leopard', 'lion', 'lynx', 'tiger', 'domestic cat']

//We can spread string too
const demoString = 'Tolulope'
const spreadString = [...demoString] //['T', 'o', 'l', 'u', 'l', 'o', 'p', 'e']

//We can spread Objects too
// - copy properties from one object to another object literals
const feline = { leg: 4, family: 'felidea' };
const canine = { family: 'candea', fury: true };

const dog = { ...canine, ispet: true }; //{family: 'candea', fury: true, ispet: true}
const lion = { ...feline, order: 'Panthera' }; //{family: 'candea', fury: true, ispet: true}
const catDog = { ...canine, ...feline } //{family: 'felidea', fury: true, leg: 4}
// catDog both have a family property, therefore order matters as it callbacks the one that comes last


// USES OF SPREAD
//+++++

const datafromForm = {
    email: 'bluetick@gmail.com',
    password: 'Nakaroma89',
    username: 'Bluetick'

}

const addedForm = {
    ...datafromForm, id: 'user4567', isAdmin: false
} //{email: 'bluetick@gmail.com', password: 'Nakaroma89', username: 'Bluetick', id: 'user4567', isAdmin: false}


/**
 * REST 
 * =======
 * uses ... same as Spread
 */

// const demoArg = function () {
//     console.log(arguments)
// }

// const sum = function () {
//     return arguments.reduce((total, integer) => total + integer)
// } //didnt work because argument didnt work

function sumAll(...nums) {
    // return (nums)
    return nums.reduce((total, integer) => total + integer)
} //... is rest i.e Collect the rest of th values

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal goes to : ${gold}`)
    console.log(`silver Medal goes to : ${silver}`)
    console.log(`And thanks to every other participants: ${everyoneElse}`)
}

/**
 * DESTRUCTING
 * ===========
 * A short or clean syntax to unpack:
 * - Values from an array
 * - properties from an objects
 * into distinct variables.
 */

const ballScores = [98567, 89563, 75890, 83000, 68499, 93000];

/**DESTRUCTING FROM AN ARRAY */
const [gold, silver, bronze, ...everyoneElse2] = ballScores;
gold //98567
silver //89563
bronze //75890
everyoneElse2 //[83000, 68499, 93000]

/**DESTRUCTING FROM AN OBJECT*/

const runner = {
    first: 'Tolulope',
    last: 'Fakunle',
    country: 'Nigeria',
    title: 'Tolulope Coder',
    born: 1999,
    died: 3000
}

const runner2 = {
    first: 'Stacy',
    last: 'Flowers',
    country: 'England',
    title: 'StachTech',
    born: 1978,
    // died: 2005
}
// const first = runner.first
// const last = runner.last
// const country = runner.country

// const { first, last, country } = runner //Making a variable called first, last and country from the object user
// More concise method

// const { born: birthYear, died: deathYear } = runner //This will make us a varibale called birthyear not born
// const { first, last, died = 'N/A' } = runner2

/**DESTRUCTING PARAMETERS*/
const runner3 = {
    first2: 'Fikemi',
    last2: 'Ray',
    country: 'USA'
}
const fullName = ({ first2, last2 }) => {
    return `${first2} ${last2}`
}
fullName(runner3); //'Fikemi Ray'
