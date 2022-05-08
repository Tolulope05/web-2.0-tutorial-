const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('SORRY, YOU ARE NOT AN ADMIN');
}) // This midleware applies to only this route

router.get('/', (req, res) => {
    res.send('THIS IS THE ADMIN LEVEL, TURN BACK GEE')
});

router.get('/topsecrets', (req, res) => {
    res.send('THIS IS TOP SECRET')
});

router.get('/deleteEverything', (req, res) => {
    res.send('Ok!!..DELETED EVERYTHING')
});



module.exports = router;