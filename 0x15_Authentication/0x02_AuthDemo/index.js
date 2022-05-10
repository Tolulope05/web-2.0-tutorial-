const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        res.send('YAH WELCOME')
    } else {
        res.send('Try Again')
    }
});

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET, YOU CANNOT SEE ME UNLESS YOU\'RE LOGGED IN');
});

app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
});