const express = require('express');
const router = express.Router();

const userData = require('../models/user');

// for creating new user
router.get('/register', (req, res) => {
    res.render('user/register', { title: 'Register' });
});

router.post('/register', (req, res) => {
    let newUser = {
        id: null,
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        biography: '',
        sections: []
    };

    userData.save(newUser);

    res.redirect('/u/login');
});

// authentication
router.get('/login', (req, res) => {
    res.render('user/login', { title: 'Login' });
});

router.post('/login', (req, res) => {
    console.log(req.body);

    const user = userData.getByUsername(req.body.username);
    console.log('get user');

    // bad authentication
    if(user && user.password === req.body.password) {
        res.redirect(`/u/${user.username}`);
    } else {
        res.render('not_found', { title: 'Error' });
    }
});

router.get('/:username', (req, res) => {
    const user = userData.getByUsername(req.params.username);
    if(user)
        res.render('user/profile', { title: `${user.username}'s profile`, user: user });
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