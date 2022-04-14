// makeRequest(() => {
//     makeRequest(() => {
//         makeRequest(() => {

//         },
//             () => {

//             })
//     },
//         () => {

//         })
// },
//     () => {

//     })

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your data from ${url}`)
        }
    }, delay)
}

// fakeRequestCallback('tolutech.com/page1',
//     function (response) {
//         console.log('It Worked')
//         console.log(response)
//         fakeRequestCallback('tolutech.com/page2',
//             function (response) {
//                 console.log('It Worked Again 2nd time')
//                 console.log(response)
//                 fakeRequestCallback('tolutech.com/page3',
//                     function (response) {
//                         console.log('It Worked 3rd Time')
//                         console.log(response)
//                         fakeRequestCallback('tolutech.com/page4',
//                             function (response) {
//                                 console.log('It Worked for the 4th time')
//                                 console.log(response)
//                                 fakeRequestCallback('tolutech.com/page5',
//                                     function (response) {
//                                         console.log('It Worked 5th time')
//                                         console.log(response)
//                                     }, function (err) {
//                                         console.log('Oh No, Error Time out in the 5th round', err)
//                                     }
//                                 )
//                             }, function (err) {
//                                 console.log('Oh No, Error Time out in the 4th round', err)
//                             }
//                         )
//                     }, function (err) {
//                         console.log('Oh No, Error Time out #rd time', err)
//                     }
//                 )
//             }, function (err) {
//                 console.log('Oh No, Error Time out 2nd req', err)
//             }
//         )
//     }, function (err) {
//         console.log('Oh No, Error Time out', err)
//     }
// )

/**
 * Promises
 * - an object representing the eventual completion 
 * or failure of an asynchronous operation.
 * Promises have 3 states: - pending - resolved - rejected
 */

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

const request = fakeRequestPromise('tolutech.com/api/coder/page1');
request
    .then(() => {
        console.log('Promise success')
    }) // Runs if promise is resolved.
    .catch(() => {
        console.log('Oh No...Error promise!')
    }) // Runs if promise is rejected.