const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

/**ONE TO MANY */

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fail', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby WaterMelon', price: 5.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinea, CA' })
//     const melon = await Product.findOne({ name: "goddess Melon" });
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm);
// } // Farms is showing it saved products ID and all the other object key parameters 
// // But Mongo DB is only showing the object ID in the DB.
// makeFarm()

// const addProduct = async () => {
//     const farm = await Farm.findOne({ name: 'Full Belly Farms' });
//     const watermelon = await Product.findOne({ name: "Sugar Baby WaterMelon" });
//     farm.products.push(watermelon);
//     await farm.save();
//     console.log(farm);
// }
// addProduct()


/** MONGOOSE POPULATE */
Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products') // This chanhes products from object id to its actual reference products
    .then(farm => console.log(farm))

/**ONE TO BAJILLION RELATIONSHIP
 * ==============================
 * > when you have more documents embeded to a document
 * > tweets.js
*/
