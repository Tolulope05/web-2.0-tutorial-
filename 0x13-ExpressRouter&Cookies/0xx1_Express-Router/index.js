const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');

/*EXPRESS ROUTER*/
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);


app.listen('3000', () => {
    console.log('Server is running on port 3000');
});

