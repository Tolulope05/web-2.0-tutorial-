const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
var methodOverride = require('method-override');
const AppError = require('./AppError');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2') // Creates a database called farmStand
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

app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            res.render('products/index', { products, category });
        } else {
            const products = await Product.find({});
            res.render('products/index', { products, category: 'All' })
        }
    } catch (error) {
        next(error)
    }

});

/**CREATING NEW PRODUCT */
app.get('/product/new', (req, res) => {
    // throw new AppError('NOT ALLOWED', 401);
    res.render('products/new', { categories });
    console.log('New request on Product page')
});

app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    } catch (e) {
        next(e)
    }
});

app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return next(new AppError('Product Not Found', 404));
        }
        res.render('products/show', { product });
    } catch (error) {
        next(error)
    }
});

/**UPDATING A PRODUCT */
// This requires a package called method override so as to chamge a post request to a put request
app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id);
        if (!product) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/edit', { product, categories });
        console.log(`new request to edit ${product.name} `)
    } catch (error) {
        next(error)
    }
});

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true }); //Arguments: id | how we want to update | options
        res.redirect(`/products/${product._id}`)
    } catch (error) {
        next(error)
    }
});

/** DELETING A PRODUCT */
app.delete('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        console.log(deletedProduct);
        res.redirect('/products')
    } catch (error) {
        next(error)
    }

});

/** ERROR HANDLING MIDDLEWARE */
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});
