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

/**ONE TO BATALLION */
const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     const user = new User({ username: 'chickenfan99', age: 99 })
//     const tweet1 = new Tweet({ text: 'omg I love my chicken family', likes: 0 })
//     tweet1.user = user; // This is seen as an Id that can later be refrenced in the db
//     user.save();
//     tweet1.save();
// } // First Tweet
const makeTweets = async () => {
    // const user = new User({ username: 'chickenfan99', age: 99 })
    const user = await User.findOne({ username: 'chickenfan99' })
    const tweet1 = new Tweet({ text: 'kukuruku kukuruku wakeup dokie dokie', likes: 0 })
    tweet1.user = user;
    user.save();
    tweet1.save();
} // Second Tweet
makeTweets();
