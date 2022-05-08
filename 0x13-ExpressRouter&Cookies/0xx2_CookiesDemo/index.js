const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hey there!');
})

app.get('/greet', (req, res) => {
    res.send('Hey there!');
})

app.listen('3000', () => {
    console.log('Server is running on port 3000');
});