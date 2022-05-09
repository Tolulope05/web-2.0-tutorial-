const express = require('express');
const app = express();

// var cookieParser = require('cookie-parser'); // for session, You no longer need cookie-parser
var session = require('express-session');

// app.use(session({ secret: 'ssshhhhh', resave: false, saveUninitialized: true }));
const sessionOptions = { secret: 'ssshhhhh', resave: false, saveUninitialized: true };
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times.`);
})

app.get('/register', (req, res) => {
    const { username = 'John' } = req.query;
    req.session.username = username;
    console.log(req.session);
    res.redirect('/greet')
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
});

app.listen('3000', () => {
    console.log('Server is running on port 3000');
});