const express = require('express');
const app = express();
const path = require('path') // A module built into Express

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// => Telling the App to use EJS files
app.set('view engine', 'ejs'); // This wont work if we call nodedemon in another directory

// To give us ability to call index.js from another directory apart from the home directory
app.set('views', path.join(__dirname, '/views')) // to be able to run index.js outside templatinf demo 


// => Root Route
app.get('/', (req, res) => {
    console.log('New get request on /')
    res.render('home')
});

app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 100) + 1

    res.render('random')
})
