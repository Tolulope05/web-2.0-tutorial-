/**
 * Using the new arrow functions syntax
 * understanding the following methods:
 * ForEach
 * map
 * filter
 * find
 * reduce
 * some 
 * every
 */

/**
 * forEach
 * Acepts a callback function
 * calls the function once per element in the array
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// function print(element) {
//     console.log(element);
// }
// numbers.forEach(print);

// //Old ways of doing things.
//=============================
// numbers.forEach(function (el) {
//     console.log(el)
// })


numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})


// New ways of doing things.
//============================
// for (let el of numbers) {
//     console.log(el);
// } 