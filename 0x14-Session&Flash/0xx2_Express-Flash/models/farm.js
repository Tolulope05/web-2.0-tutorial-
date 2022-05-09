const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = Schema({
    name: { type: String, required: [true, 'Farm must have a name!'] },
    city: { type: String },
    email: { type: String, required: [true, 'Email required'] },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

/**DELETING MONOOSE MIDDLEWARE
 * > Make a fake farm and delete
 * > concluded on using post
 */
// farmSchema.pre('findOneAndDelete', async function (data) {
//     console.log('PRE MIDDLEWARE')
//     console.log(data)
// }) // This ran but the Data that was passed wasnt real Data.
// farmSchema.post('findOneAndDelete', async function (data) {
//     console.log('POST MIDDLEWARE')
//     console.log(data)
// }) // This came out with the real Data.

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res)
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
