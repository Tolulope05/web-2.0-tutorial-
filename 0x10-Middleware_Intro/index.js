const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    // console.log(req.method, req.path);
    // req.method = 'GET'; makes all method sent a GET Request.
    req.requestTime = Date.now();
    next();
});

// app.use((req, res, next) => {
//     console.log('Hey Coder, This is my First MiddleWare!!');
//     return next();
//     console.log('Hey Coder, This is my First MiddleWare after calling Next()');
// }); //defining middleware

// app.use((req, res, next) => {
//     console.log('Hey Coder, This is my Second Middleware!!');
//     return next()
// }); //defining middleware

// app.use((req, res, next) => {
//     console.log('Hey Coder, This is my Third Middleware!!');
//     return next()
// }); //defining middleware

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Woof woof!!');
});

app.listen(3000, () => {
    console.log('App is running on localhost');
});