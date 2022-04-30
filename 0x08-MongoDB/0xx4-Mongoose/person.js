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

const personSchema = new Schema({
    firstName: String,
    lastName: String,
})

/**
 * MONGOOSE VIRTUALS
 * ==================
 * They give us the ability to add properties to the schemas
 *  that actually dont exist in the database.
 * > They give synthesis of multiple properties that can be derived from the database.
 * > We use virtuals to derive some useful informationms we can derive fom existing data in the database
 */

personSchema.virtual('fullname').get(function () {
    return `${this.firstName} ${this.lastName}`;
}); // this refers to individual instance we are working with

const Person = mongoose.model('Person', personSchema);

const temmy = new Person({ firstName: 'Tolulope', lastName: 'Fakunle' })
// temmy.fullname => 'Tolulope Fakunle'

/**
 * Middleware
 * ==========
 * Middleware (also called pre and post hooks) are functions which 
 * are passed control during execution of asynchronous functions. 
 * > Middleware is specified on the schema level and is useful for writing plugins.
 * > Gives us ability to run codes before and after certains things are being executed.
 */

