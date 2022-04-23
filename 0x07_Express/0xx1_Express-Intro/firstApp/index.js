const express = require('express');
const createApplication = express();

//Check this out before anything else
// console.dir(createApplication);

createApplication.listen(8080, () => {
    console.log('Listening on port 8080!')
}) //PORT, CALLBACK => Server setup Successfully.

// createApplication.use((req, res) => {
//     console.log('We got a new Request');
//     res.send('<h1>Hi, We got your request, This is our response!!<h1>\n<h2>How are you?</h2>');
// })  //Anytime we have a request, this call back will run

/**
 * *******************************************
 * RESPONDING WITH DIFFERENT CONTENTS BY 
 * REQUESTING DIFFERENT REQUEST IN THE WEBPAGE.
 * ===========================================
 * - ROUTING
 * - refers to how an application's endpoints (URIs) respond to client requests
 * _NB_
 * - We cant have more than one Http Request that have more than one response
 */

// /cats => 'I am a Cat, My name is Molly'
// /dogs => 'I am a Dog and My name is Doggy'
// /

createApplication.get('/cats', (req, res) => {
    console.log('We got a new Get Request on /cats endpoint');
    res.send('<h1>Hi, We got your request, Molly<h1>\n<h2>I am a Dog, Do some Moew for me</h2>');
}); // routing /cats endpoint
createApplication.post('/cats', (req, res) => {
    console.log('We got a new Post Request on /cats endpoint');
    res.send('<h1>Hi,You made a Post request Molly<h1>\n<h2>I am a Dog, Do some Moew for me</h2>');
}); // routing /cats endpoint via a post request
createApplication.get('/dogs', (req, res) => {
    console.log('We got a newGet Request on /dog endpoint');
    res.send('<h1>Hi, We got your request, Doggy<h1>\n<h2>I am a Cat, Do some Woof for me</h2>');
}) // routing /dogs endpoint
createApplication.get('/', (req, res) => {
    console.log('We got a new Get Request on /home endpoint');
    res.send('<h1>Hi, We got your request, This is our Home Directory<h1>\n<h2>How are you?</h2>');
}) // routing / endpoint

// Matching Generic Response aside for the omes up here, We use 
// Routes are matched in order so the star should be the last thing to put

// createApplication.get("*", (req, res) => {
//     console.log('WE GOT A REQUEST THAT DIDNT MATCH ANY ENDPOINT');
//     res.send(`<h1>I DONT KNOW THE ROUTE TO THAT PATH!</h1>`);
// }) // routing all other endpoints

/**
 * ========================
 * PATH PARAMETERS
 * ========================
 * DEFINING GENERIC PATTERNS
 * - PATTERNS THAT FIT INTO THINGS THAT ARE SEARCHED FOR
 */

// /r/SOMETHINGHERE
createApplication.get('/r/:subreddit', (req, res) => {
    // console.log(req.params) // http://localhost:8080/r/fikemi => { subreddit: 'fikemi' }
    const { subreddit } = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

// /r/SOMETHINGHERE/Somewhere2
createApplication.get('/r/:subreddit/:matchId', (req, res) => {
    // console.log(req.params) // http://localhost:8080/r/fikemi => { subreddit: 'fikemi'}
    const { subreddit, matchId } = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit at the ${matchId} sub-id</h1>`);
})