/**
 * define a function to generate password
 * password must not be greater than 6+ characters
 * password must not include space
 */

// Ways around the concepts

// const password = prompt('Please enter a password less than 6 digit');
// if (password.length >= 6) {
//     console.log('Password is successful')
// }
// else {
//     console.log('password is longer than 6 digits')
// }
// if (password.indexOf(' ') === -1) {
//     console.log('You dont have a space. GJ!')
// } else {
//     console.log('You have space in your password');
// } // 2 logics that deifnes what we want

const password = prompt('Please enter a password less than 6 digit');
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Pasword')
    } else {
        console.log('Password cannot contain spaces');
    }
}
else {
    console.log('password cannot be less than 6 characters')
} // nested logics 
