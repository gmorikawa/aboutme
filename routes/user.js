const express = require('express');
const router = express.Router();

const userData = require('../models/user');

// for creating new user
router.get('/register', (req, res) => {
    res.render('user/register', { title: 'Register' });
});

router.post('/register', (req, res) => {
    let newUser = {
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        biography: '',
        sections: []
    };

    userData.insert(newUser)
        .then(() => res.redirect('/u/login'));
});

// authentication
router.get('/login', (req, res) => {
    res.render('user/login', { title: 'Login' });
});

router.post('/login', (req, res) => {
    console.log(req.body);

    userData.getByUsername(req.body.username)
        .then(user => {
            // bad authentication
            if(user && user.password === req.body.password) {
                res.redirect(`/u/${user.username}`);
            } else {
                res.render('not_found', { title: 'Error' });
            }
        });
});

// edit page
router.get('/:username/edit', (req, res) => {
    // needs to verify if the username is registered and is logged in system
    userData.getByUsername(req.params.username)
        .then(user => {
            res.render('user/edit', { title: 'Edit', user: user });
        });
});

router.get('/:username', (req, res) => {
    userData.getByUsername(req.params.username)
        .then(user => {
            res.render('user/profile', { title: `${user.username}'s profile`, user: user });    
        });
    // if(user)
    //     res.render('user/profile', { title: `${user.username}'s profile`, user: user });
    // else
    //     res.render('not_found', { title: 'Not found'});
});

router.post('/:username', (req, res) => {
    console.log(req.body);
    res.send(`${req.params.username} post`);
});

router.put('/:username', (req, res) => {
    console.log(req.body);

    // let editUser = {
    //     fullname: req.body.fullname,
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    //     biography: req.body.biography,
    //     sections: req.body.sections
    // };

    // userData.update(editUser);
    
    res.send(`${req.params.username} put`);
});

router.delete('/:username', (req, res) => {
    userData.remove(req.params.username)
        .then(() => res.send(`${req.params.username} delete`));
});

module.exports = router;