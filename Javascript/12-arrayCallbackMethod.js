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
        score: 95,
        year: 2004
    },
    {
        title: 'stand by me',
        score: 75,
        year: 2000
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1995
    },
    {
        title: 'Alien',
        score: 80,
        year: 2010
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2019
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Jingle All The Way',
        score: 85,
        year: 2019
    },
    {
        title: 'Nothing hill',
        score: 90,
        year: 2020
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

const smallNums = numbers.filter(num =>
    num < 10
) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const highRatedMovies = movies.filter(movie => movie.score > 80)
const lowRatedMovies = movies.filter(movie => movie.score <= 80)
const recentMovies = movies.filter(movie => movie.year > 2018)
//Combining Map and Filter
// Instead of getting the whole array we can get just title using map
const titleRecentMov = recentMovies.map(n => `${n.title}`)

// We can chain them togther in one line
const lowRatedmoviesTitle = movies.filter(movie => movie.score <= 80).map(m => m.title)

/**
 *  Spread Opertor 
 * =========================
 * ...
 * - used to expand or spread an iterable or aan array
 * - used to copy the items
 */
// console.log(titleRecentMov) // ['Sharknado', 'Jingle All The Way', 'Nothing hill']
// console.log(...titleRecentMov) // Sharknado Jingle All The Way Nothing hill

const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'] //['one', 'two', 'three', 'four', 'five']

/**
 *  SOME & Every
 * ======
 * they are boolean that return t or f unlike map& filter that return new array
 * returns true if any of the array element pass the test function
 */
const exams = [56, 76, 74, 84, 67, 89, 93, 95, 100, 65, 79]
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

//Are there words longer than 4 characters
const longWords = words.every(n => n.length > 4) //false

// If people that score more than 75 passed
const passed = exams.every(score => score >= 75) //false

//Some test if one or more pass the test and return true, it will return true

const someLongWords = words.some(n => n.length > 4) //true
const somePassed = exams.some(score => score >= 75) //true


/**
 * REDUCE
 * ======
 * Executes a reducer functon that each element 
 * of the array resulting in a single value 
 * 
 * Take some array and reduce it to some single value at tbe end of the day
 */

const reduceFormat = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); //35

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0
// for (let i = 0; i < prices.length; i++) {
//     total += prices[i]
// } //111.97

// let total = 0;
// for (let price of prices) {
//     total += price
// } //111.97

// const total = prices.reduce((total, price) => {
//     return total + price
// }) // 111.97

// const total = prices.reduce((total, price) => total + price) //111.97

/**
 * =============================================
 * Find the Maximum and Minimum value in an array
 * This can be done using the reduce method
 */

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

