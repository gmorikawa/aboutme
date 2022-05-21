const express = require('express');
const router = express.Router();

// for creating new user
router.post('/', (req, res) => {
    res.send(req.body);
});

router.get('/:username', (req, res) => {
    res.send(`${req.params.username}'s edit page!`);
});

router.post('/:username', (req, res) => {
    console.log(req.body);
    res.send(`${req.params.username} post`);
});

router.put('/:username', (req, res) => {
    console.log(req.body);
    res.send(`${req.params.username} put`);
});

router.delete('/:username', (req, res) => {
    res.send(`${req.params.username} delete`);
});

module.exports = router;