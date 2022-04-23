const express = require('express');
const createApplication = express();

//Check this out before anything else
// console.dir(createApplication);

createApplication.listen(8080, () => {
    console.log('Listening on port 8080!')
}) //PORT, CALLBACK => Server setup Successfully.

createApplication.use((req, res) => {
    console.log('We got a new Request');
    res.send('<h1>Hi, We got your request, This is our response!!<h1>\n<h2>How are you?</h2>');
})  //Anytime we have a request, this call back will run

/**
 * *******************************************
 * RESPONDING WITH DIFFERENT CONTENTS BY 
 * REQUESTING DIFFERENT REQUEST IN THE WEBPAGE.
 * ===========================================
 * - ROUTING
 * - refers to how an application's endpoints (URIs) respond to client requests
 */

// /cats => 'I am a Cat, My name is Molly'
// /dogs => 'I am a Dog and My name is Doggy'
// /

createApplication.get('cats', (req, res) => {
    console.log('We got a new Request on /cats endpoint');

    res.send('<h1>Hi, We got your request, Molly<h1>\n<h2>I am a Cat, My name is Molly</h2>');

})
createApplication.get('dogs', (req, res) => {
    console.log('We got a new Request on /cats endpoint');

    res.send('<h1>Hi, We got your request, Doggy<h1>\n<h2>How are you?</h2>');

})
createApplication.get('/', (req, res) => {
    console.log('We got a new Request on /cats endpoint');

    res.send('<h1>Hi, We got your request, This is our Home Directory<h1>\n<h2>How are you?</h2>');

})


