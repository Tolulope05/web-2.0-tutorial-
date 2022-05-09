const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hey there!');
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