const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp') // Creates a database called movieApp
    .then(() => {
        console.log('Connection OPEN')
    })
    .catch((err) => {
        console.log("OPPS..connection Failed!!")
        console.log(err)
    }) //It returns a promise and we can use try and catch to chek its status

/**MONGOOSE CONNECTIONS */
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connection OPEN!!!') // We are onnected 
})

/**
 * MONGOOSE MODELS
 * ================
 * Models are just Classes, Js classes that we make with the assistance of Mongoose
 * that represent information in a mongose database
 * - specifically they represent information in some collections.
 * > Lets make a movie model
 * > To define a model, We first define a Schema
*/

/**MONGOOSE SCHEMAS */
const { Schema } = mongoose; //I destructured Schema from monodose.Schema
const movieSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    year: Number,
    score: Number,
    rating: String

}); // define a schema for {title:'Amadeus',year:1986,score:9.2,rating:'R'}

/**THE MODEL */
const Movie = mongoose.model('Movie', movieSchema); // Model created and Movie will changed to movies in db, (s will be added and M will be m)

/**INSETING A SINGLE MOVIE */
// const amadeus = new Movie({
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// });

/**
 * > open node
 * > Press .load index.js
 * > Press amadeus
 * > Press amadeus.save() => amadeus is already saved to mongodb and returns a promise we can decide or not to try and catch
 * > We can also update the object amadeus and give it new values and we can save it again as we wish.
 */

/**
 * TO INSERT BUNCHES OF MOViES
 * ===========================
 * we can use const blah = new Movie(...)
 * blah.save()
 * OR
 */

// Movie.insertMany([
//     {
//         title: 'Amalie', year: 2021, score: 8.3, rating: 'R'
//     },
//     {
//         title: 'Alien', year: 1979, score: 8.1, rating: 'R'
//     },
//     {
//         title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'
//     },
//     {
//         title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'
//     },
//     {
//         title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'
//     }
// ])
//     .then(data => {
//         console.log("It Worked");
//         console.log(data)
//     }) //Press node index.js and check Mongo db //Not commonly used tho

/**QUERYING/FINDING INFORMATION/DOCUMENT IN DATABASE ALREADY
 * ==========================================================
 * Model.find()
 * Model.findById()
 * Model.findByIdAndDelete()
 * Model.findByIdAndRemove()
 * Model.findByIdAndUpdate()
 * Model.findOne()
 * Model.findOneAndDelete()
 * Model.findOneAndRemove()
 * Model.findOneAndReplace()
 * Model.findOneAndUpdate()
 * 
 * =====================================
 * NB: Always include .then(d => console.log(d)) because it is a promise.
 * Movie.find({rating:'PG-13'}).then(d => console.log(d))
 * Movie.find({year:{$gte:2015}}).then(d => console.log(d))
 * Movie.findOne({id:'626c18fcb3844889149a406b'}).then() // Returns pending promise without data
 * Movie.findOne({id:'626c18fcb3844889149a406b'}).then(d => console.log(d)) // Returns pending promise with data resolved.
 * Movie.findById('626c18fcb3844889149a406b').then(d => console.log(d))
 * Movie.updateOne({title:'Amalie'},{title: 'Amadeus', year: 1984}).then(d=>console.log(d))
 * 
 * LETS GIVE AMADEUS AND STAND BY ME 10/10 SCORE
 * Movie.updateMany({title:{$in:['Amadeus','Stand By Me']}},{score:10}).then(d=>console.log(d))
 * Movie.findOneAndUpdate({title: 'The Iron Giant'},{score: 7.0}).then(d=>console.log(d)) // Returns the Old document
 * We can pass a third option and we can specify the new option to be true, It is false by default
 * Movie.findOneAndUpdate({title: 'The Iron Giant'},{score: 7.5},{new:true}).then(d=>console.log(d)) // Returns the new document
 * 
 * LETS DELETE ALIEN
 * Movie.deleteOne({title:'Alien'}).then(d=>console.log(d)) //{ acknowledged: true, deletedCount: 1 }
*/
