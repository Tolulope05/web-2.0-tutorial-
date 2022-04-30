const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp') // Creates a database called movieApp
    .then(() => {
        console.log('Connection OPEN')
    })
    .catch((err) => {
        console.log("OPPS..connection Failed!!")
        console.log(err)
    })

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price should be greater than 0']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    category: {
        type: [String],
        default: ['cycling', 'safety']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }, // Object
    size: {
        type: String,
        enum: ['small', 'medium', 'large']
    }
}); //

const Product = mongoose.model('Product', productSchema);



/**
 * model Instance Methods
 * =======================
 * - A way of adding functionality to the model in addition to whatever Mangoose already have
 * - We want to define our own instance method
 */

productSchema.methods.greet = function () {
    console.log(`Hello how are you today?`)
    // console.log(`Hello ${this.name}`)
}