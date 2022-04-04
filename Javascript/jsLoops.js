/**
* Loops allow us to repeat codes
* Types: for, while, for...in, for...of, do...while
*/

//Print a number from 1 to 10
/** for(
 *       [Initial expression]; 
 *       [condition];
 *       [incrementalExpression]
 * )
 */

// for (let i = 1; i <= 10; i++) {
//     console.log(i); //Anything you put in here will be dispLAYED 10 TIMES
// };


// Print out even numbers from 0 to 20
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }

// Print out 100 to 0
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// } //We can use  *=, /= too

// Always pay attention to how is this loop going to stop
// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ==================================
// ==================================
// for (let i = 1; i >= 0; i += 1)
// ==================================
// ==================================
// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!

// Looping over array1
const animals = ['dog', 'cat', 'pig', 'bird', 'duck', 'bow'];


// another way to write this for(let i =0; i <= animals.length)

// for (let i = 0; i < animals.length; i += 1) {
//     console.log(i, animals[i]);
// } //0 'dog' 1 'cat' 2 'pig' 3 'bird' 4 'duck' 5 'bow

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i]);
// } //From back

// ==================================
// Nesting for loops..
// ==================================
let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//     console.log('Outer:', i);
//     for (let j = 0; j < str.length; j++) {
//         console.log('   Inner:', str[j]);
//     }
// }
//        or 

for (let i = 0; i <= 4; i++) {
    console.log('Outer:', i);
    for (let j = 0; j < str.length; j++) {
        console.log(`   Inner: ${j}`);
    }
}

const seatingChart = [
    ['Krsiten', 'Erick', 'Namita'],
    ['Geofry', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack']
]


