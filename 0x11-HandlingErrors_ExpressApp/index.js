const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError')

app.use(morgan('tiny'));

app.use((req, res, next) => {

    req.requestTime = Date.now();
    console.log(req.path, req.method)
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love Dogs!');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'tolulope') {
        next();
    }
    // res.send('Sorry You Need a Correct Password to access this link, \n Append ?password=YOURPASSWORD into the query string.')
    // res.status(401)
    throw new AppError('Password Required', 401);
}
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!');
});

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Woof woof!!');
});

app.get('/secret', verifyPassword, (req, res, next) => {
    res.send('YOUR SECRET IS YOU TOO LIKE TO DEY CODE')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

// app.use((err, req, res, next) => {
//     console.log('************************************');
//     console.log('***************ERROR****************');
//     console.log('************************************');
//     // console.log(err); // Default Error.
//     // res.status(505).send('OH BOY, ERROR FOUND!');
//     next(err); //Tigger the next Error Handlind Middleware, The One I passed in.
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message)
});

app.listen(3000, () => {
    console.log('App is running on localhost');
});