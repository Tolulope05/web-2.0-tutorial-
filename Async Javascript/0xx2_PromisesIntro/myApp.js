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