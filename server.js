const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const auth = require('./auth/auth');
const items = require('./auth/items');

const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

router.use('/api', auth);
router.use('/api/items', items);

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "/html/index.html");
});

module.exports = router; 