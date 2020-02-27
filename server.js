// const express = require('express');

// const server = express();

// server.get('/', (req, res) => {
//   res.send(`<h1>Welcome to Use My Tech Stuff 3!!</h1>`);
// });
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('./html/index.html', { root: __dirname });
});

module.exports = router; 