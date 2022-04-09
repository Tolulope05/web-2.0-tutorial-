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
 * Arrow function
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


// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })


// New ways of doing things.
//============================
// for (let el of numbers) {
//     console.log(el);
// } 

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        dcore: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} has a rating of ${movie.score}/100`)
// }) //Old way

// for (let movie of movies) {
//     console.log(`${movie.title} has a rating of ${movie.score}/100`)
// } // New way


/**
 * Map
 * Takes data from an array and transform/map
 *  it ito a new array or data
 * creates a new array using the result value of a callback
 */
const doubNum = numbers.map(function (number) {
    return number * 2;
});

const namesMovie = movies.map(function (movie) {
    return movie.title;
})

/**
 * Arrow Function 
 * syntactically compact alternative
 * to a regular function expression.
 */

const add = (x, y) => {
    return x + y;
}

const square = (x, y) => {
    return x * y;
}