const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// => Telling the App to use EJS
app.set('view engine', 'ejs');

// => Root Route
app.get('/', (req, res) => {
    console.log('New get request on /')
    res.send('<h1>Hello Bro, How are you today</h1>')
});

