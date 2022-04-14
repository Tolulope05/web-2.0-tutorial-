/**
 * Call Stack
 * ==========
 * - mecahnism Js uses to keep track of its place in a script that calls multiple functions
 * - how js know what function is currenty being run and 
 * what function are called from within that function.
 * 
 * Tool
 * ====
 * loupe
 */

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isrightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
) //isrightTriangle(3,4,5) //True
console.log('Before Done!!!');

isrightTriangle(3, 4, 5);

console.log('After Done!!!');

/**
 * CallBacks
 * =========
 * Change Background using Nested Call Back Hell
 */
// // document.body.style.backgroundColor = 'red';
// setTimeout(() => document.body.style.backgroundColor = 'red', 2000);
// setTimeout(() => document.body.style.backgroundColor = 'green', 4000);
// setTimeout(() => document.body.style.backgroundColor = 'blue', 6000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'blue'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'violet'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'yellow'
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay * 1000)
}
delayedColorChange('green', 3, () => {
    delayedColorChange('teal', 3, () => {
        delayedColorChange('blue', 3, () => {
            delayedColorChange('orange', 3, () => {
                delayedColorChange('purple', 3)
            })
        })
    })
}) // CHANGES BACKGROUND COLOR.


/**
 * PROMISES
 * ========
 * - an object representingthe eventual completion 
 * - or failure of an asynchronous operation.
 */


