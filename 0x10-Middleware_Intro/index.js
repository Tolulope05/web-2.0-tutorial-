const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    // console.log(req.method, req.path);
    // req.method = 'GET'; makes all method sent a GET Request.
    req.requestTime = Date.now(); // This was used in all other requests out there.
    console.log(req.path, req.method)
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love Dogs!');
    next();
})

/**PASSWORD MIDDLEWARE DEMO 
 * - Using a Middleware to protect a Route.
 * - This is a Fake Authentication
*/
// app.use('/secret', (req, res, next) => {
//     // res.send('Query Seen')
//     const { password } = req.query;
//     if (password === 'tolulope') {
//         next();
//     } else {
//         res.send('Sorry You Need a Correct Password to access this link, \n Append ?password=YOURPASSWORD into the query string')
//     }
//     /** FOR EVERY ROUTE WE NEED TO PASS A QUERY STRING AND PASSWORD FOR IT TO WORK */
// })
/* WE CAN ALSO USE */
const verifyPassword = (req, res, next) => {
    // res.send('Query Seen')
    const { password } = req.query;
    if (password === 'tolulope') {
        next();
    } else {
        res.send('Sorry You Need a Correct Password to access this link, \n Append ?password=YOURPASSWORD into the query string.')
    }
    /** FOR EVERY ROUTE WE NEED TO PASS A QUERY STRING AND PASSWORD FOR IT TO WORK */
} // We want verify password to run first before any other request.


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