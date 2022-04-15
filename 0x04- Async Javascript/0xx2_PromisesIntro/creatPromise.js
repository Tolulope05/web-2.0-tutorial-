

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random())
        setTimeout(() => {
            resolve()
        }, 1500)
    })
}

fakeRequest('/tolu/tech/1')
    .then((data) => {
        console.log('Done with Request')
        // console.log(data)
    })
    .then((data) => {
        console.log('It Worked (Page2)')
        console.log(data)
        return fakeRequestPromise('tolu/tech/page2')
    })
    .catch(() => {
        console.log('hi juli')
    })