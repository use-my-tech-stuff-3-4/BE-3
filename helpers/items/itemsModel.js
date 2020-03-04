const db = require('../../data/dbConfig');

module.exports = {
    getItems,
    getItem,
    addItem,
    updateItem,
    removeItem,
};

async function getItems() {
    return await db('items')
}

async function getItem(id) {
    return await db('items')
    .where({ id })
    .first();
}

async function addItem(item) {
    const [id] = await db('items').insert(item).returning("id");
    return getItem(id);
}

async function updateItem(id, changes) {
    return await db('items')
    .where({ id })
    .update(changes);
}

async function removeItem(id) {
    return await db('items')
    .where('id', id)
    .del();
}