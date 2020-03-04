const express = require('express');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');
const restricted = require('../auth/restricted/restricted');
const secrets = require('../config/secret');
const User = require('../helpers/users/usersModel');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '24h',
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
};

router.post('/register', async (req, res) => {
    let user = req.body;
    const email = user.email;
    const username = user.username;
    const password = user.password;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    if (email && !validator.validate(email)) {
        res.status(400).json({ message: "Please provide a valid email!" });
    } else if (!username || !password) {
        res.status(401).json({ message: "Must enter a username and password to register!" });
    } else if (await User.findBy({ username })) {
        res.status(400).json({ message: "That username has already been taken!" })
    } else if (password.length < 8) {
        res.status(400).json({ message: "Your password must be at least 8 characters!" })
    } else {
        User.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    User.findBy({ username })
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Welcome ${user.username}!`, token, id: user.id });
        } else {
            res.status(401).json({ message: "The username and/or password you entered did not match our records. Please double-check and try again." });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                res.send(error);
            } else {
                res.send("You have now been logged out, have a good day!");
            }
        })
    } else {
        res.send("You have been logged out!");
    }
});

router.get('/users', restricted, (req, res) => {
    User.find()
      .then(user => {
        res.json({ user, loggedInUser: req.user.username });
      })
      .catch(err => res.send(err));
});

// router.get('/users/:id', restricted, (req, res) => {
//     User.findById(req.params.id)
//       .then(user => {
//         res.json({ user, loggedInUser: req.user.username });
//       })
//       .catch(err => res.send(err));
// });

router.get('/users/:id', restricted, async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        if (!user) { 
            res.status(404).json({ error: "The specified User does not exist!" });
        } else {
            res.status(200).json(user);
        }
    } catch(error) {
        res.status(500).json({ error, message: "Unable to get the specified User!" });
    }
});
module.exports = router;