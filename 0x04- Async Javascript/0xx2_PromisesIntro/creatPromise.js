
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random() * 10) //0-9
//         setTimeout(() => {
//             if (rand <= 6) {
//                 resolve('Your Fake Data Here')
//             } else {
//                 reject('Request Error!!')
//             }
//         }, 1500)
//     })
// }

// fakeRequest('/tolu/tech/1')
//     .then((data) => {
//         console.log('Done with REQUEST:')
//         console.log('Data is:', data)
//     })
//     .catch((err) => {
//         console.log('Oh NO!!', err)
//     })


// A Change Background Function 

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay * 1000)
// }
// delayedColorChange('green', 3, () => {
//     delayedColorChange('teal', 3, () => {
//         delayedColorChange('blue', 3, () => {
//             delayedColorChange('orange', 3, () => {
//                 delayedColorChange('purple', 3)
//             })
//         })
//     })
// }) // CHANGES BACKGROUND COLOR.

// Using Promise to run the change background function

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 2000)
    .then(() => delayedColorChange('red', 3000))
    .then(() => delayedColorChange('green', 3000))
    .then(() => delayedColorChange('blue', 3000))
    .then(() => delayedColorChange('orange', 3000))
    .then(() => delayedColorChange('yellow', 3000))
    .then(() => delayedColorChange('indigo', 3000))
    .then(() => delayedColorChange('violet', 3000))

