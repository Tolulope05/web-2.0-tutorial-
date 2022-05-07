const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = Schema({
    name: { type: String, required: [true, 'Farm must have a name!'] },
    city: { type: String },
    email: { type: String, required: [true, 'Email required'] },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

farmSchema.pre('findOneAndDelete', async function (data) {
    console.log('PRE MIDDLEWARE')
    console.log(data)
})
farmSchema.post('findOneAndDelete', async function (data) {
    console.log('POST MIDDLEWARE')
    console.log(data)
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
