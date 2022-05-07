const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { id: false }, // This is to make sure Mongo does not give new ObjectId to this automatically
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema)

/**ONE TO FEW */
/**=========== */
const makeUser = async () => {
    const u = new User({
        first: 'Tolulope',
        last: 'Fakunle'
    })
    u.addresses.push({
        street: '13th Basiri',
        city: 'Lagos State',
        state: 'Lagos State',
        country: 'Nigeria'
    })
    const res = await u.save()
    console.log(res);
};
// makeUser();


const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '18th Balogun',
            city: 'Ekiti State',
            state: 'Ekiti State',
            country: 'Nigeria'
        }
    )
    const res = await user.save()
    console.log(res)
} // This is a way to add an array to a Data Collection.

addAddress('62759a4fe057b9f327e0018d') // Tolulope Fakunle successfully has 2 Addresses


/**ONE TO MANY */
/**===========*/
// > checkout farm.js
