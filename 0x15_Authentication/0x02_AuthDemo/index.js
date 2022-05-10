const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo') // Creates a database called farmStand
    .then(() => {
        console.log('Mongo Connection OPEN')
    })
    .catch((err) => {
        console.log('Mongo Connection Failed!!')
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // Parsing the request body
app.use(session({ secret: 'notagoodsecret', resave: true, saveUninitialized: true }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
} //defining a middleware for require login

app.get('/', (req, res) => {
    res.send('This is the Home Page!');
});

app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
});

app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({});
    const validUser = await bcrypt.compare(password, user.password);
    if (validUser) {
        req.session.user_id = user._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
});

app.post('/logout', async (req, res) => {
    // req.session.user_id = null; // Mrthod 1
    req.session.destroy();
    res.redirect('/login')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
});

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('TOP SECRET')
})

app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
});