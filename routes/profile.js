const express = require('express');
const router = express.Router();

const userData = require('../models/user');

router.get('/:username', (req, res) => {
    const user = userData.query().find(x => x.nickname === req.params.username);
    if(user)
        res.render('user/profile', { title: `${user.nickname}'s profile`, user: user });
    else
        res.render('not_found', { title: 'Not found'});
});

module.exports = router;