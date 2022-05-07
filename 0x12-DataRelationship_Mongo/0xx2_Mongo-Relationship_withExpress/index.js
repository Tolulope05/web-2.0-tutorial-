const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
var methodOverride = require('method-override')

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStandTake2') // Creates a database called farmStand
    .then(() => {
        console.log('Mongo Connection OPEN')
    })
    .catch((err) => {
        console.log('Mongo Connection Failed!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // override with POST having ?_method=PUT

const categories = ['fruit', 'vegetable', 'dairy'] // Added options

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });

    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' })
    }
    const products = await Product.find({})
    // console.log(products)
    console.log('New request on products/index');
});

/**CREATING NEW PRODUCT */
app.get('/product/new', (req, res) => {
    res.render('products/new', { categories });
    console.log('New request on Product page')
});
app.post('/products', async (req, res) => {
    // console.log(req.body);
    const newProduct = new Product(req.body); // Saves the new product to the database
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
}); // reason we use app.use urlencoded

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
    console.log(`new request to display ${product.name} `);
});

/**UPDATING A PRODUCT */
// This requires a package called method override so as to chamge a post request to a put request
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id);
    res.render('products/edit', { product, categories });
    console.log(`new request to edit ${product.name} `)
});
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true }); //Arguments: id | how we want to update | options
    // console.log(req.body);
    res.redirect(`/products/${product._id}`)
});

/** DELETING A PRODUCT */
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.redirect('/products')
})


const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});
