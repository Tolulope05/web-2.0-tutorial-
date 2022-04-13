/**
 * Logical operators includes the ffl
 * && - AND: Both must be truth for the whole to be true
 * || - OR: Any of both cAN BE TRUE FOR THE LOGIC TO WORK
 * ! - Not: IT IS AN INVERSE RLATIONSHIP
 */

const password = prompt('Enter a Vaid Password');
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Valid Password!');
} else {
    console.log('Try again..Invalid Password!!')
} //both sides need to be true


/**
 * Team Park logic
 * age 0-5 BABY FREE
 * age 5-10 CHILD $10
 * age 10-65 ADULT $20
 * age 65+ SENIOR $10
 */

const age = -10;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log('FREE')
} else if (age >= 5 && age < 10) {
    console.log('$10')
} else if (age > 10 && age < 65) {
    console.log('$20')
} else {
    console.log('Invalid age!!')
} // End of OR logical operator

/**
 * Not logical expression
 * We use !
 */

const firstName = prompt('Enter First Name');
if (!firstName) {
    console.log('Invalid Name...Enter correct First Name')
} else {
    console.log('Frist Name entered correctly')
} //Its goig to return true if the expression we are applying it to returns false
