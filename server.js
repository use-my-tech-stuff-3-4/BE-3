// const express = require('express');

// const server = express();

// server.get('/', (req, res) => {
//   res.send(`<h1>Welcome to Use My Tech Stuff 3!!</h1>`);
// });
const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const auth = require('./auth/auth');


const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

router.use('/api', auth);


router.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "/html/index.html");
});

module.exports = router; 