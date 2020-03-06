const db = require('../../data/dbConfig');

module.exports = {
    getItems,
    getItem,
    // getItemsByUserId,
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

// function getItemsByUserId() {
//     return db("items")
//       .leftJoin("users", "items.user_id")
//       .select({
//         id: "items.id",
//         owner_id: "items.owner_id",
//         title: "items.title",
//         type: "items.type",
//         description: "items.description",
//         price: "items.cost",
//         availability: "items.availability",
//         brand: "items.brand",
//         model: "items.model",
//         img_URL: "items.img_URL",
//         renter: "items.renter"
//       .where("user_id", userId)
//       });
//   }