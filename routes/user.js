const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
    res.send(`${req.params.username}'s edit page!`);
});

router.post('/:username', (req, res) => {
    res.send('post request');
});

router.

module.exports = router;