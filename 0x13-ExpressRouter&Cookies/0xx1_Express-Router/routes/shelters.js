const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All Shelters');
});

router.post('/', (req, res) => {
    res.send('Creating a Shelter');
});

router.get('/:id', (req, res) => {
    res.send('Viewing One shelter');
});

router.get('/:id/edit', (req, res) => {
    res.send('Editing One shelter');
});

module.exports = router

