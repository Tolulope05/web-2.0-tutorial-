const express = require('express');
const app = express();
const morgan = require('morgan');

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
    } else {
        res.send('Sorry You Need a Correct Password to access this link, \n Append ?password=YOURPASSWORD into the query string.')
    }
}
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!');
});

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

app.listen(3000, () => {
    console.log('App is running on localhost');
});