const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } } // Other API Params can be addd via this on axios e.g {page: pageNumber}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    console.log(res.data) // Image generated
    // console.log(res.data[0].show.image) // Image generated
    makeImages(res.data)
    form.elements.query.value = '';
})

// A function that make new images on key press
const makeImages = function (shows) {
    for (result of shows) {
        if (result.show.image) {
            console.log(result)
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}

// Write a function that clearn images on new key press
