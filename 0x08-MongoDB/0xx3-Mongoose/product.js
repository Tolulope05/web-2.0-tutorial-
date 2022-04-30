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
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    }
}); //

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    // name: 'Mountain Bike',
    price: 599
});

bike.save()
    .then((d) => {
        console.log('Product saved')
        console.log(d)
    })
    .catch((err) => {
        console.log('Error saving product')
        console.log(err)
    });