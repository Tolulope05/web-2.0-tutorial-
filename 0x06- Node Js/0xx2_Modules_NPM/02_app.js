// const math = require('./01_math');
// console.log(math.square(8));

const { pi, square, add } = require('./01_math');


console.log(square(8));
console.log(add(2, 3));
console.log(pi);


/**
 * Require an entire Directory
 */

const cats = require('./shelter') // Reuired the full shelter directory via index.js
console.log('Require an entire directory', cats) // {} 