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

/**DEFINING THE ASYNC UTILITY */
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
} // End of Async Utility.

app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    }
    const products = await Product.find({});
    res.render('products/index', { products, category: 'All' })
}));

/**CREATING NEW PRODUCT */
app.get('/product/new', (req, res) => {
    // throw new AppError('NOT ALLOWED', 401);
    res.render('products/new', { categories });
    console.log('New request on Product page')
});

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
}));

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new AppError('Product Not Found', 404));
    }
    res.render('products/show', { product });
}));

/**UPDATING A PRODUCT */
// This requires a package called method override so as to chamge a post request to a put request
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', { product, categories });
    console.log(`new request to edit ${product.name} `)
}));

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true }); //Arguments: id | how we want to update | options
    res.redirect(`/products/${product._id}`)
}));

/** DELETING A PRODUCT */
app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.redirect('/products')
}));

/** ERROR HANDLING MIDDLEWARE */

const handleValidationErr = err => {
    console.dir(err);
    // return err;
    return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name); // CastError CastError Error ValidationError
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});
