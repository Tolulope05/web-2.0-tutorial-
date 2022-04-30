const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp') // Creates a database called movieApp
    .then(() => {
        console.log('Connection OPEN')
    })
    .catch((err) => {
        console.log("OPPS..connection Failed!!")
        console.log(err)
    }) //It returns a promise and we can use try and catch to chek its status

const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    description: String,
    stock: Number
});

const Product = mongoose.model('Product', productSchema);