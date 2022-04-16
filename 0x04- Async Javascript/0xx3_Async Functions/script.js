/**
 * ASync
 * =====
 * keyword: async
 * Keyword: await
 * Async function always return a promise
 * - If the function returns a value, the promise will be rsolved with that value.
 * - If the function throws an execption, the promise wil be rejected.
 */

// async function hello() {}
// } // Automatically returns New Promises

/** REjecting a promise
 * - By throwing an error into the async function.
 */

// const sing = async () => {
//     // throw new Error('Async down')
//     throw ('402 Bad Request')
//     return 'LA LA LA'
//     /**
//      * If you throw an eror in aync, The promise is rejected
//      * If we throw a valur, Promise is accepted.
//      */
// } //fulfiled 'la la la'

// sing()
//     .then((data) => console.log('Promise resolved eith:', data))
//     .catch((err) => console.log('Oh no, Promise rejected:', err))


/**
 *
 * @param {tee} username
 * @param {tolulope} password
 * @returns
 */
// const login = async function (username, password) {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'tolulope') return 'WELCOME!'
//     throw 'Invalid Password!'
// }

// login('Tolu', 'tolulope')
//     .then(msg => {
//         console.log('Logged in!')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('Invalid Username & Password: ', err)
//     })



// THE AWAIT KEYWORD
/**
 * AWAIT KEYWORD
 * - It allows us to write asynchronous code that looks like is synchronous
 * - We can only use the await keyword inside of function declared with async
 * - Await will pause the execution of the function
 * - waiting for the promise to be resolved.
 */

// A Change Background Function

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('red', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


// Await keyword makes the delayed color change to wait for each other
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
} // rainbow() in console.

/**
 * Handling error in Async Functions.
 */


// Using this Promise 
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500 //0-9
        setTimeout(() => {
            if (delay > 2000) {
                resolve('Connection Timeout :(')
            } else {
                reject(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequest('/tolu/tech/1')
//     .then((data) => {
//         console.log('Done with REQUEST:')
//         console.log('Data is:', data)
//     })
//     .catch((err) => {
//         console.log('Oh NO!!', err)
//     }) // Old way using Promise.

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1')
        console.log(data1)
        let data2 = await fakeRequest('/page2')
        console.log(data2)
    } catch (e) {
        console.log('Caught an error')
        console.log('Error is: ', e)
    }
} // makeTwoRequest()

