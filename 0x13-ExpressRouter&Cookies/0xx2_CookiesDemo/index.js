const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));


app.get('/greet', (req, res) => {
    // console.log(req.cookies); // { name: 'Henrietta', animal: 'Harlequin ' }
    const { name = 'User' } = req.cookies;
    res.send(`Hello ${name}`);
})

/**SENDING COOKIES */
app.get('/setname', (req, res) => {
    res.cookie('name', 'Henrietta');
    res.cookie('animal', 'Harlequin ');
    res.send('Cookie set!');
})

/**SIGNING COOKIES */
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('signedcookies')
})
app.get('/verifycookie', (req, res) => {
    console.log(req.cookies); // Displays sent cookies
    console.log(req.signedCookies); // Displays signed cookies
    res.send(req.signedCookies);
})

app.listen('3000', () => {
    console.log('Server is running on port 3000');
})