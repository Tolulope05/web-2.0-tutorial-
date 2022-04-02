const userInput = prompt('Enter Something!!');

if (userInput) {
    console.log('TRUTHY!!!')
} else {
    console.log('FALSY!!!')
} // entering empty string is FALSY!!!
// entring any value is truthy!!!   

if (0) {
    console.log('TRUTHY!!!')
} else {
    console.log('FALSY!!!')
} //FALSY!!!

if (null) {
    console.log('TRUTHY!!!')
} else {
    console.log('FALSY!!!')
} //FALSY!!!

if (134544) {
    console.log('TRUTHY!!!')
} else {
    console.log('FALSY!!!')
} //Any random number truthy!!!

if (NaN) {
    console.log('TRUTHY!!!')
} else {
    console.log('FALSY!!!')
} //FALSY!!!

if (undefined) {
    console.log('TRUTHY!!!')
} else {
    console.log('FALSY!!!')
} //FALSY!!!