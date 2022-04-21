/**
 * We will use the module.exports object to export our functions
 */
const add = (x, y) => x + y;

const pi = 3.14;

const square = (x) => x * x;

// module.exports.add = add;
// module.exports.pi = pi;
// module.exports.square = square;

// module.exports = { add, pi, square };

const math = {
    add: add,
    pi: pi,
    square: square
}

module.exports = math;