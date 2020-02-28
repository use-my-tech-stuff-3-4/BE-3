const db = require('../../data/dbConfig');

module.exports = {
    getItems,
    getItem,
    addItem,
    updateItem,
    removeItem,
};

function getItems() {
    return db('items')
}

function getItem(id) {
    return db('items')
    .where({ id })
    .first();
}

async function addItem(item) {
    const [id] = await db('items').insert(item).returning("id");
    return getItem(id);
}

function updateItem(id, changes) {
    return db('items')
    .where({ id })
    .update(changes);
}

function removeItem(id) {
    return db('items')
    .where('id', id)
    .del();
}