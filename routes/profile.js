const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
    res.send(`${req.params.username}'s page!`);
});

module.exports = router;