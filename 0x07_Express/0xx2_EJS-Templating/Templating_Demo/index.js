const express = require('express');
const app = express();
var colors = require('colors'); // for console colors
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
    console.log('New get request on /'.green)
    res.render('home')
});

app.get('/rand', (req, res) => {
    console.log('New get request on /rand'.green)
    const number = Math.floor(Math.random() * 100) + 1;
    const text = 'Hello Tolu Coder'
    // res.render('random', { rand: number, word: text }) // Whatver number is will be available on the template under rand variable
    res.render('random', { number, text }) // or <=
})

//Subreddit Template Demo
app.get('/r/:subreddit', (req, res) => {
    console.log(`New get request on /r/`.green);
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})
