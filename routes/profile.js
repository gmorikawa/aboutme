const express = require('express');
const router = express.Router();

const userData = require('../models/user');

router.get('/:username', (req, res) => {
    const user = userData.find(x => x.nickname === req.params.username);
    res.send(user);
});

module.exports = router;