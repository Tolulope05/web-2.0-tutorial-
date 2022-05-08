const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All Dogs');
})
router.post('/', (req, res) => {
    res.send('Create new Dogs');
})
router.get('/:id', (req, res) => {
    res.send('Viewing one Dogs');
})
router.get('/:id/edit', (req, res) => {
    res.send('Editing One Dog');
});

module.exports = router
