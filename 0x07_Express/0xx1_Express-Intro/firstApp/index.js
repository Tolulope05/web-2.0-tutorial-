const express = require('express');
const createApplication = express();

//Check this out before anything else
// console.dir(createApplication);

createApplication.use((req, res) => {
    console.log('We got a new Request');
    // console.dir(req);
    console.dir(res);
})  //Anytime we have a request, this call back will run

createApplication.listen(8080, () => {
    console.log('Listening on port 8080!')
}) //PORT, CALLBACK => Server setup Successfully.
