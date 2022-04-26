const express = require('express');
const app = express();
var colors = require('colors'); // for console colors
const path = require('path') // A module built into Express
const redditData = require('./data.json');

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
    res.render('home', { name: 'Home' })
});

// //Subreddit Template Demo
// app.get('/r/:subreddit', (req, res) => {
//     console.log(`New get request on /r/`.green);
//     const { subreddit } = req.params;
//     res.render('subreddit', { subreddit })
// });

// => Rand Route // Conditions in Ejs
app.get('/rand', (req, res) => {
    console.log('New get request on /rand'.green)
    const num = Math.floor(Math.random() * 100) + 1;
    const text = 'Hello Tolu Coder'
    // res.render('random', { rand: num, word: text }) // Whatver number is will be available on the template under rand variable
    res.render('random', { num, text, name: 'random' }) // or <=
});

// => Cats Route // Loop in Ejs
app.get('/cats', (req, res) => {
    console.log('New request on /xats '.green)
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { Allcats: cats, name: 'random' })
})

// => To mimic what we might get bck from a database using data.json
//More complex Subreddit Demo
app.get('/r/:subreddit', (req, res) => {
    console.log(`New get request on /r/`.green);
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data }) // To access individual property
        // We spread the data so instead of doing data.name, we will do name
    } else {
        res.render('notfound', { subreddit, name: 'Ops!,Not Found' })
    } // Didnt get this all thou with the compiling

});

// => Serving Static Assets in Express
app.use(express.static(path.join(__dirname, 'public'))); // A public directory contents are served
