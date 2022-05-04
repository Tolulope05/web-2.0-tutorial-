const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'))

app.get('/', (req, res) => {
    res.send('Home Page is Up and running');
});

app.get('/dogs', (req, res) => {
    res.send('Woof woof!!');
});


app.listen(3000, () => {
    console.log('App is running on localhost');
});