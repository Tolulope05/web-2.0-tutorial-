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

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'

    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'

    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'

    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'

    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'

    }
] // All items in this array needs to be validated before the insertMany will work


Product.insertMany(seedProducts)
    .then(res => console.log(res))
    .catch(err => console.log(err))