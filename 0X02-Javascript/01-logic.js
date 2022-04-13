// console.log('Hello World');
/**
 * Random Number Generator
 * define a function to generate random number
 * @param {number} Random
 * if the random number is less than 5, return true
 * return Number greater than 5!!!
 * return random number
 * else
 * return false
 * rturn number is less than 5 !!!
 * return random number
 * @log {number}
 * 
 */
let RanNum = Math.floor(Math.random() * 10);
console.log(RanNum);
if (RanNum >= 5) {
    console.log("Random greater than 5!!!");
    console.log(RanNum);
} else {
    console.log("Number is less than 5!!!");
    console.log(RanNum);
} // end of if else statement

const dayOfWeek = "Friday"
if (dayOfWeek === 'Monday') {
    console.log('Its a Brand new monday');
} else if (dayOfWeek === 'Tuesday') {
    console.log('Its a tuesday Morning');
} else if (dayOfWeek === 'Friday') {
    console.log('Its Friday Night...lets party');
} // end of else if statement

/**
 * age 0-5 BABY FREE
 * age 5-10 CHILD $10
 * age 10-65 ADULT $20
 * age 65+ SENIOR $10
 * Visit logical-operators for a shorter version
 */

const age = '66'
if (age < 5) {
    console.log('You re\' a baby. You get in for free')
} else if (age < 10) {
    console.log('You re\' a child. You have to pay $10')
} else if (age < 65) {
    console.log('You re\' an adult. You have to pay $20')
} else if (age > 65) {
    console.log('You re\' a senior. You get in for free')
} //end of else if 

const dayWeek = prompt('Enter a particular day of the week').toLowerCase();
if (dayWeek === 'monday') {
    console.log('Its a Brand new monday');
} else if (dayWeek === 'tuesday') {
    console.log('Its a Tuesday Morning');
} else if (dayWeek === 'friday') {
    console.log('Its Friday Night...lets party');
} else {
    console.log('MEH');
} //combining if, if else and else statment.