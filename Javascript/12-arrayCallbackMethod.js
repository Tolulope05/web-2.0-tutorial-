/**
 * ArrayCallBack Mthods
 * 
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
        score: 99,
        year: 1984
    },
    {
        title: 'stand by me',
        score: 85,
        year: 2000
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1995
    },
    {
        title: 'Alien',
        score: 90,
        year: 2010
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 2019
    },
    {
        title: 'Nothing hill',
        score: 90,
        year: 1979
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
 *  it into a new array or data
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
} //add(4,6)

const square = (x) => {
    return x * x;
} //sqaure(7,9)

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

/** 
 * Implicit Return
 * 
 * It leaves out the return keyword
 * They only work if there is one line, 
 * one statement to be evaluated and returned.
*/

const isEven = num => (
    num % 2 === 0
);

const rolldie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

// One line implicit function
const rolldie3 = () => Math.floor(Math.random() * 6) + 1;


// const newMovies = movies.map(function (mov) {
//     return `${mov.title} has rating of ${mov.score / 10}`
// })

const newMovies = movies.map((mov) => (
    `${mov.title} has rating of ${mov.score / 10}`
)) //New Method Map takes a data from an array and it prints it out one by one

/**
 * You want to wait in between functions
 * =====================================
 * 
 * SetTimeout
 * It will call a callback and the number of milliseconds
 * 
 * Setinterval
 * It will call a callback every x numbers of milliseconds
 * We can repeat something 
 * 
 * it can be stopped by passing clearinterval(passing the id)
 */

function executeTime() {
    console.log('Hello User :)')

    setTimeout(() => {
        console.log('.....Are you still there?')
    }, 3000) // Prints Are you stil there after 3000millisecs

    const id = setInterval(() => {
        console.log(Math.floor(Math.random() * 10) + 1)
    }, 2000) // repeats the callback after 2000milliseconds

    const stopId = setInterval(() => {
        clearInterval(id)
    }, 10000); //stop passing the setinterval after 10000milliseconds
} // executeTime()


/**
 * Filter
 * ========
 * Creates new array with all elements 
 * that pass the test implemented by the provided function
 */
// With refernece to the numer array set upstream
const odds = numbers.filter(n => {
    return n % 2 === 1; //Our callback function returns true or false
    // if it is true, n is added to the filtered array
}) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

const smallNums = numbers.filter((num) =>
    num < 10
) // [1, 2, 3, 4, 5, 6, 7, 8, 9]


