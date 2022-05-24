const express = require('express');
const router = express.Router();

const userData = require('../models/user');

// for creating new user
router.post('/', (req, res) => {
    console.log(req.body);

    let newUser = {
        id: null,
        fullname: req.body.fullname,
        nickname: req.body.nickname,
        email: req.body.email,
        biography: req.body.biography,
        sections: []
    };

    userData.save(newUser);

    res.send('Succesfully registered!!!!!!!');
});

router.get('/:username', (req, res) => {
    const user = userData.query().find(x => x.nickname === req.params.username);
    if(user)
        res.render('user/profile', { title: `${user.nickname}'s profile`, user: user });
    else
        res.render('not_found', { title: 'Not found'});
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