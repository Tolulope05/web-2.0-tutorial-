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
});

/**
 * model Instance Methods
 * =======================
 * - A way of adding functionality to the model in addition to whatever Mangoose already have
 * - We want to define our own instance method
*/

// productSchema.methods.greet = function () {
//     console.log(`Hello how are you today?`)
//     console.log(`Hello from ${this.name}`)
// }

/**IF YOU HAVE A PRODUCT ON A DASH BOARD 
 * AND YOU WANT TO TOGGLE OR QUICKLY DISPLAY A PRODUCT 
 * ON DASHBOARD ADMIST THOUSANDS OF PRODUCTS
 * - TO FIND A PRODUCT AND QUICKLY MAKE IT GO ON SALE
 * - WE CAN DEFINE A METHOD FOR IT
 * ==============================================
 * - We can mthods to increment values or decrement values 
 * - We can also set properties to update the values of
 *  some properties of some prodcts instead of having to write the logic over and over again
 * 
*/

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
} // this refers to individual instances 

// We can define a method to Add category

productSchema.methods.addCategory = function (newCat) {
    this.category.push(newCat)
    return this.save()
} // this refers to individual instances

// STATIC METHODS




const Product = mongoose.model('Product', productSchema);

const findProduct = async function () {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" })
    // foundProduct.greet();

    // console.log(foundProduct)
    // await foundProduct.toggleOnSale()
    // console.log(foundProduct)

    console.log(foundProduct)
    await foundProduct.addCategory('outdoor')
    console.log(foundProduct)

} // Succesfully toggle product OnSale //Successfully added category

findProduct()
