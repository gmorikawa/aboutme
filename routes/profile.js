const express = require('express');
const router = express.Router();

const userData = require('../models/user');

router.get('/:username', (req, res) => {
    userData.get().then(data => {
        res.send(data);
    });
    // const user = userData.getByUsername(req.params.username);
    // if(user)
    //     res.render('user/profile', { title: `${user.username}'s profile`, user: user });
    // else
    //     res.render('not_found', { title: 'Not found'});
});

module.exports = router;