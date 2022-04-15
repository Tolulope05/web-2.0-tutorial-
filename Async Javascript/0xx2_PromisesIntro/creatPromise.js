

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1500)
    })
}

fakeRequest('/tolu/tech/1')
    .then((data) => {
        console.log('Done with Request')
    })