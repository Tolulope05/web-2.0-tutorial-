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
 * -- Promises are resolved and rejected with values.
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

// fakeRequestPromise('tolutech.com/api/coder/page1')
//     .then(() => {
//         console.log('It Worked (Page1)')
//         fakeRequestPromise('tolutech.com/api/coder/page2')
//             .then(() => {
//                 console.log('It Worked (Page2)')
//                 fakeRequestPromise('tolutech.com/api/coder/page3')
//                     .then(() => {
//                         console.log('It Worked (Page3)')
//                         fakeRequestPromise('tolutech.com/api/coder/page4')
//                             .then(() => {
//                                 console.log('It Worked (Page4)')
//                                 fakeRequestPromise('tolutech.com/api/coder/page5')
//                                     .then(() => {
//                                         console.log('It Worked (Page 5)')
//                                         fakeRequestPromise('tolutech.com/api/coder/page6')
//                                             .then(() => {
//                                                 console.log('It Worked (Page 6)')
//                                             })
//                                             .catch(() => {
//                                                 console.log('Promise Rejected (6) !!')
//                                                 console.log('Oh No...Error promise!')
//                                             })
//                                     })
//                                     .catch(() => {
//                                         console.log('Promise Rejected (5) !!')
//                                         console.log('Oh No...Error promise!')
//                                     })
//                             })
//                             .catch(() => {
//                                 console.log('Promise Rejected (4) !!')
//                                 console.log('Oh No...Error promise!')
//                             })
//                     })
//                     .catch(() => {
//                         console.log('Promise Rejected (3) !!')
//                         console.log('Oh No...Error promise!')
//                     })
//             })
//             .catch(() => {
//                 console.log('Promise Rejected (2) !!')
//                 console.log('Oh No...Error promise!')
//             })
//     }) // Runs if promise is resolved.
//     .catch(() => {
//         console.log('Promise Rejected !!')
//         console.log('Oh No...Error promise!')
//     }) // Runs if promise is rejected.


// THE CLEANEST OPTION WITH THEN/CATCH
fakeRequestPromise('tolutech.com/api/coder/page1')
    .then((data) => {
        console.log('It Worked (Page1)')
        console.log(data)
        return fakeRequestPromise('tolutech.com/api/coder/page1')
    })
    .then((data) => {
        console.log('It Worked (Page2)')
        console.log(data)
        return fakeRequestPromise('tolutech.com/api/coder/page2')
    })
    .then((data) => {
        console.log('It worked(Page3)')
        console.log(data)
        return fakeRequestPromise('tolutech.com/api/coder/page2')
    })
    .catch((err) => {
        console.log('OH NO,REQUEST FAILED !!')
        console.log(err)
    }) // We can use a single .catch


