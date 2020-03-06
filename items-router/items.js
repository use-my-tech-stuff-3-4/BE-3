const express = require('express');
const router = express.Router();
const restricted = require('../auth/restricted/restricted');
const Items = require('../helpers/items/itemsModel');

router.get('/', (req, res) => {
    Items.getItems()
    .then(items => {
        res.status(200).json(items);
    })
    .catch(err => {
        res.status(500).json({ err, message: "Could not retrieve all items!" });
    })
});

router.get('/:id', async (req, res) => {
    try {
        let item = await Items.getItem(req.params.id)
        if (!item) { 
            res.status(404).json({ error: "The specified item does not exist!" });
        } else {
            res.status(200).json(item);
        }
    } catch(error) {
        res.status(500).json({ error, message: "Unable to get the specified item!" });
    }
});

router.post('/', restricted, async (req, res) => {
    try {
        let item = await Items.addItem(req.body);
        res.status(201).json({ message: "Your item has been added!", item });
      } catch (error) {
         res.status(500).json({ error, message: "Please provide data for item owner, title, type, description, price, and availibility!" });
    }
});

router.put('/:id', restricted, async (req, res) => {
    try {
        let item = await Items.updateItem(req.params.id, req.body);
        let changes = await Items.getItem(req.params.id);
        if (!item) {
            res.status(404).json({ error: "The specified item does not exist!" });
        } else {
            res.status(202).json({ message: "The following updates to the specified item have been made!", changes });
        } 
    } catch (err) {
        res.status(500).json({ error: "Unable to update the specified item!" });
    }
});

router.delete('/:id', restricted, async (req, res) => {
    try {
        let item = await Items.removeItem(req.params.id, req.body);
        const title = req.body.title;
        if (!item) {
            res.status(404).json({ error: "The specified item does not exist!" });
        } else {
            res.status(202).json({ message: "The specified item listing has been removed!", title });
        } 
    } catch (err) {
        res.status(500).json({ error: "Unable to delete the specified item!" });
     }
});



module.exports = router;