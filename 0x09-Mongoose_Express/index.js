const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp') // Creates a database called movieApp
    .then(() => {
        console.log('Connection OPEN')
    })
    .catch((err) => {
        console.log("OPPS..connection Failed!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dogs', (req, res) => {
    res.send('Woof!!')
})
const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});

