const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand') // Creates a database called movieApp
    .then(() => {
        console.log('Mongo Connection OPEN')
    })
    .catch((err) => {
        console.log('Mongo Connection Failed!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/product', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index');
})

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});

