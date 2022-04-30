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

// const bike = new Product({
//     name: 'tire Pump',
//     price: 20,
//     category: ['cycling'],
// });

// bike.save()
//     .then((d) => {
//         console.log('Product saved')
//         console.log(d)
//     })
//     .catch((err) => {
//         console.log('Error saving product')
//         console.log(err)
//     });


/**
 * Validation applies automatically when something is being created, but we need to specify it when something is being updated.
 * => runvalidator helps make sure the updated value reponds to the standards of the schema
 */
// Product.findOneAndUpdate({ name: 'tire Pump' }, { $set: { price: -200 } }, { new: true, runValidators: true })
//     .then((d) => {
//         console.log('Product saved')
//         console.log(d)
//     })
//     .catch((err) => {
//         console.log('Error saving product')
//         console.log(err)
//     });

/**
 * CUSTOM VALIDATION Moongoose Errors
 * - enum => size property  in my schema
 */

// const bike = new Product({
//     name: 'Cycling Jersey',
//     price: 20.50,
//     category: ['cycling'],
//     size: 'extra-small'
// });

// bike.save()
//     .then((d) => {
//         console.log('Product saved')
//         console.log(d)
//     })
//     .catch((err) => {
//         console.log('Error saving product')
//         console.log(err)
//     }); // Error: Product validation failed: size: `extra-small` is not a valid enum value for path `size`.


