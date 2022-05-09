const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());


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

app.listen('3000', () => {
    console.log('Server is running on port 3000');
})