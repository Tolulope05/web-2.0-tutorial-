const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand') // Creates a database called movieApp
    .then(() => {
        console.log('Mongo Connection OPEN')
    })
    .catch((err) => {
        console.log('Mongo Connection Failed!!')
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby GrapeFruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(d => console.log(d))
//     .catch(e => console.log(e))

